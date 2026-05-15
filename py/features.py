# HarryPotter SDK feature factory

from feature.base_feature import HarryPotterBaseFeature
from feature.test_feature import HarryPotterTestFeature


def _make_feature(name):
    features = {
        "base": lambda: HarryPotterBaseFeature(),
        "test": lambda: HarryPotterTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
