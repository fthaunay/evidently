#!/usr/bin/env python3

"""
This is a demo service for Evidently metrics integration with Prometheus and Grafana.

Read `README.md` for proper setup and installation.

The service gets a reference dataset from reference.csv file and process current data with HTTP API.

Metrics calculation results are available with `GET /metrics` HTTP method in Prometheus compatible format.
"""
import dataclasses
import datetime
import hashlib
import logging
import os
from typing import Dict
from typing import List
from typing import Optional

import flask
import pandas as pd
import prometheus_client
import yaml
from flask import Flask
from werkzeug.middleware.dispatcher import DispatcherMiddleware

#from evidently.model_monitoring import CatTargetDriftMonitor
#from evidently.model_monitoring import ClassificationPerformanceMonitor
from evidently.metric_preset import DataDriftPreset
from evidently.metric_preset  import DataQualityPreset
#from evidently.model_monitoring import ModelMonitoring
#from evidently.model_monitoring import NumTargetDriftMonitor
#from evidently.model_monitoring import ProbClassificationPerformanceMonitor
#from evidently.model_monitoring import RegressionPerformanceMonitor
from evidently.pipeline.column_mapping import ColumnMapping
from evidently.runner.loader import DataLoader
from evidently.runner.loader import DataOptions

app = Flask(__name__)

logging.basicConfig(
    level=logging.INFO, format="%(asctime)s [%(levelname)s] %(message)s", handlers=[logging.StreamHandler()]
)

# Add prometheus wsgi middleware to route /metrics requests
app.wsgi_app = DispatcherMiddleware(app.wsgi_app, {"/metrics": prometheus_client.make_wsgi_app()})


@dataclasses.dataclass
class MonitoringServiceOptions:
    datasets_path: str
    min_reference_size: int
    use_reference: bool
    moving_reference: bool
    window_size: int
    calculation_period_sec: int


@dataclasses.dataclass
class LoadedDataset:
    name: str
    references: pd.DataFrame
    monitors: List[str]
    column_mapping: ColumnMapping


EVIDENTLY_MONITORS_MAPPING = {
    #"cat_target_drift": CatTargetDriftMonitor,
    "data_drift": DataDriftPreset,
    #"data_quality": DataQualityMonitor,
    #"num_target_drift": NumTargetDriftMonitor,
    #"regression_performance": RegressionPerformanceMonitor,
    #"classification_performance": ClassificationPerformanceMonitor,
    #"prob_classification_performance": ProbClassificationPerformanceMonitor,
}


class MonitoringService:
    # names of monitoring datasets
    datasets: List[str]
    metric: Dict[str, prometheus_client.Gauge]
    last_run: Optional[datetime.datetime]
    # collection of reference data
    reference: Dict[str, pd.DataFrame]
    # collection of current data
    current: Dict[str, Optional[pd.DataFrame]]
    # collection of monitoring objects
    monitoring: Dict[str, DataDriftPreset]
    calculation_period_sec: float = 15
    window_size: int

    def __init__(self, datasets: Dict[str, LoadedDataset], window_size: int):
        self.reference = {}
        self.monitoring = {}
        self.current = {}
        self.column_mapping = {}
        self.window_size = window_size

        for dataset_info in datasets.values():
            self.reference[dataset_info.name] = dataset_info.references
            self.monitoring[dataset_info.name] = DataDriftPreset()
                #monitors=[EVIDENTLY_MONITORS_MAPPING[k]() for k in dataset_info.monitors], options=[]
            #)
            self.column_mapping[dataset_info.name] = dataset_info.column_mapping

        self.metrics = {}
        self.next_run_time = {}
        self.hash = hashlib.sha256(pd.util.hash_pandas_object(self.reference["pompiers"]).values).hexdigest()
        self.hash_metric = prometheus_client.Gauge("evidently:reference_dataset_hash", "", labelnames=["hash"])

    def iterate(self, dataset_name: str, new_rows: pd.DataFrame):
        """Add data to current dataset for specified dataset"""

        print("dans iterate")
        window_size = self.window_size

        print(f"window_size: {window_size}")

        if dataset_name in self.current:
            current_data = pd.concat([self.current[dataset_name], new_rows], ignore_index=True)

        else:
            current_data = new_rows

        print(f"current_data: {current_data}")

        current_size = current_data.shape[0]
        print(f"current_size: {current_size}")

        if current_size > self.window_size:
            # cut current_size by window size value
            current_data.drop(index=list(range(0, current_size - self.window_size)), inplace=True)
            current_data.reset_index(drop=True, inplace=True)

        self.current[dataset_name] = current_data

        if current_size < window_size:
            logging.info(f"Not enough data for measurement: {current_size} of {window_size}." f" Waiting more data")
            print(f"Not enough data for measurement: {current_size} of {window_size}." f" Waiting more data")
            return

        next_run_time = self.next_run_time.get(dataset_name)

        if next_run_time is not None and next_run_time > datetime.datetime.now():
            logging.info("Next run for dataset %s at %s", dataset_name, next_run_time)
            print("Next run for dataset %s at %s", dataset_name, next_run_time)
            return

        self.next_run_time[dataset_name] = datetime.datetime.now() + datetime.timedelta(
            seconds=self.calculation_period_sec
        )
        self.monitoring[dataset_name].execute(
            self.reference[dataset_name], current_data, self.column_mapping[dataset_name]
        )
        self.hash_metric.labels(hash=self.hash).set(1)

        for metric, value, labels in self.monitoring[dataset_name].metrics():
            metric_key = f"evidently:{metric.name}"
            found = self.metrics.get(metric_key)

            if not labels:
                labels = {}

            labels["dataset_name"] = dataset_name

            if isinstance(value, str):
                continue

            if found is None:
                found = prometheus_client.Gauge(metric_key, "", list(sorted(labels.keys())))
                self.metrics[metric_key] = found

            try:
                found.labels(**labels).set(value)

            except ValueError as error:
                # ignore errors sending other metrics
                logging.error("Value error for metric %s, error: ", metric_key, error)
            print(self.metrics)


SERVICE: Optional[MonitoringService] = None

appHasRunBefore:bool = False
@app.before_request
def configure_service():
    global appHasRunBefore
    if not appHasRunBefore:
        # pylint: disable=global-statement
        global SERVICE
        config_file_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "config.yaml")

        # try to find a config file, it should be generated via the data preparation script
        if not os.path.exists(config_file_path):
            logging.error("File %s does not exist", config_file_path)
            exit("Cannot find a config file for the metrics service. Try to check README.md for setup instructions.")

        with open(config_file_path, "rb") as config_file:
            config = yaml.safe_load(config_file)

        options = MonitoringServiceOptions(**config["service"])
        datasets_path = os.path.abspath(options.datasets_path)
        # TODO remoive after test
        datasets_path = '/home/ubuntu/evidently/examples/integrations/grafana_monitoring_service/datasets'
        loader = DataLoader()

        datasets = {}

        for dataset_name in os.listdir(datasets_path):
            logging.info(f"Load reference data for dataset %s", dataset_name)
            reference_path = os.path.join(datasets_path, dataset_name, "reference.csv")

            if dataset_name in config["datasets"]:
                dataset_config = config["datasets"][dataset_name]
                reference_data = loader.load(
                    reference_path,
                    DataOptions(
                        date_column=dataset_config.get("date_column", None),
                        separator=dataset_config["data_format"]["separator"],
                        header=dataset_config["data_format"]["header"],
                    ),
                )
                datasets[dataset_name] = LoadedDataset(
                    name=dataset_name,
                    references=reference_data,
                    monitors=dataset_config["monitors"],
                    column_mapping=ColumnMapping(**dataset_config["column_mapping"]),
                )
                logging.info("Reference is loaded for dataset %s: %s rows", dataset_name, len(reference_data))

            else:
                logging.info("Dataset %s is not configured in the config file", dataset_name)

        SERVICE = MonitoringService(datasets=datasets, window_size=options.window_size)


@app.route("/iterate/<dataset>", methods=["POST"])
def iterate(dataset: str):
    item = flask.request.json

    global SERVICE
    if SERVICE is None:
        return "Internal Server Error: service not found", 500

    SERVICE.iterate(dataset_name=dataset, new_rows=pd.DataFrame.from_dict(item))
    return "ok"


if __name__ == "__main__":
    app.run(debug=True)
