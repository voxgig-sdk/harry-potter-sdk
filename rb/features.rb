# HarryPotter SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module HarryPotterFeatures
  def self.make_feature(name)
    case name
    when "base"
      HarryPotterBaseFeature.new
    when "ratelimit"
      HarryPotterRatelimitFeature.new
    when "retry"
      HarryPotterRetryFeature.new
    when "test"
      HarryPotterTestFeature.new
    when "timeout"
      HarryPotterTimeoutFeature.new
    else
      HarryPotterBaseFeature.new
    end
  end
end
