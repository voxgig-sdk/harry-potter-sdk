# HarryPotter SDK utility: feature_add
module HarryPotterUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
