from typing import List
from typing import Union

from evidently.future.metric_types import MetricCalculationBase
from evidently.future.metric_types import MetricTest
from evidently.future.metric_types import MetricTestResult
from evidently.future.metric_types import SingleValue
from evidently.future.metric_types import SingleValueTest
from evidently.tests.base_test import TestStatus


class IsInMetricTest(MetricTest):
    values: List[Union[int, str]]

    def to_test(self) -> SingleValueTest:
        def func(metric: MetricCalculationBase, value: SingleValue) -> MetricTestResult:
            check_value = value.value in self.values
            return MetricTestResult(
                "is_in",
                f"{metric.display_name()}: Value in list [{', '.join(str(x) for x in self.values)}]",
                f"Actual value: {value.value}",
                TestStatus.SUCCESS if check_value else TestStatus.FAIL,
            )

        return func


def is_in(values: List[Union[int, str]]) -> MetricTest:
    return IsInMetricTest(values=values)


class NotInMetricTest(MetricTest):
    values: List[Union[int, str]]

    def to_test(self) -> SingleValueTest:
        def func(metric: MetricCalculationBase, value: SingleValue) -> MetricTestResult:
            check_value = value.value not in self.values
            return MetricTestResult(
                "not_in",
                f"{metric.display_name()}: Value not in list [{', '.join(str(x) for x in self.values)}]",
                f"Actual value: {value.value}",
                TestStatus.SUCCESS if check_value else TestStatus.FAIL,
            )

        return func


def not_in(values: List[Union[int, str]]) -> MetricTest:
    return NotInMetricTest(values=values)
