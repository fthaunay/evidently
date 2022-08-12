from typing import List

from evidently.analyzers.utils import DatasetColumns
from evidently.metrics.base_metric import InputData
from evidently.test_preset.test_preset import TestPreset
from evidently.tests import TestNumberOfRows
from evidently.tests import TestNumberOfColumns
from evidently.tests import TestColumnsType
from evidently.tests import TestAllColumnsNANShare
from evidently.tests import TestNumColumnsOutOfRangeValues
from evidently.tests import TestCatColumnsOutOfListValues
from evidently.tests import TestNumColumnsMeanInNSigmas


class DataStability(TestPreset):
    def generate_tests(self, data: InputData, columns: DatasetColumns):
        return [
            TestNumberOfRows(),
            TestNumberOfColumns(),
            TestColumnsType(),
            TestAllColumnsNANShare(),
            TestNumColumnsOutOfRangeValues(),
            TestCatColumnsOutOfListValues(),
            TestNumColumnsMeanInNSigmas(),
        ]