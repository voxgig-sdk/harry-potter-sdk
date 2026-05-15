-- ProjectName SDK exists test

local sdk = require("harry-potter_sdk")

describe("HarryPotterSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
