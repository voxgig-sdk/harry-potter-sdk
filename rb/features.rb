# HarryPotter SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module HarryPotterFeatures
  def self.make_feature(name)
    case name
    when "base"
      HarryPotterBaseFeature.new
    when "test"
      HarryPotterTestFeature.new
    else
      HarryPotterBaseFeature.new
    end
  end
end
