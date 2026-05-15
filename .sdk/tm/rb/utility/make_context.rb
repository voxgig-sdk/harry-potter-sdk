# HarryPotter SDK utility: make_context
require_relative '../core/context'
module HarryPotterUtilities
  MakeContext = ->(ctxmap, basectx) {
    HarryPotterContext.new(ctxmap, basectx)
  }
end
