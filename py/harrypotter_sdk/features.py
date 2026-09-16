# HarryPotter SDK feature factory

from harrypotter_sdk.feature.base_feature import HarryPotterBaseFeature
from harrypotter_sdk.feature.ratelimit_feature import HarryPotterRatelimitFeature
from harrypotter_sdk.feature.retry_feature import HarryPotterRetryFeature
from harrypotter_sdk.feature.test_feature import HarryPotterTestFeature
from harrypotter_sdk.feature.timeout_feature import HarryPotterTimeoutFeature


_FEATURES = {
    "base": lambda: HarryPotterBaseFeature(),
    "ratelimit": lambda: HarryPotterRatelimitFeature(),
    "retry": lambda: HarryPotterRetryFeature(),
    "test": lambda: HarryPotterTestFeature(),
    "timeout": lambda: HarryPotterTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
