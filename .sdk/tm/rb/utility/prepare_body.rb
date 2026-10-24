# HarryPotter SDK utility: prepare_body
require_relative 'media'
module HarryPotterUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return HarryPotterUtilities.raw_body(ctx.reqdata) if HarryPotterUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
