# ProjectName SDK exists test

import pytest
from harrypotter_sdk import HarryPotterSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = HarryPotterSDK.test(None, None)
        assert testsdk is not None
