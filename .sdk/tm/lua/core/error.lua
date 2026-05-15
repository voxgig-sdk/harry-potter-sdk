-- HarryPotter SDK error

local HarryPotterError = {}
HarryPotterError.__index = HarryPotterError


function HarryPotterError.new(code, msg, ctx)
  local self = setmetatable({}, HarryPotterError)
  self.is_sdk_error = true
  self.sdk = "HarryPotter"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function HarryPotterError:error()
  return self.msg
end


function HarryPotterError:__tostring()
  return self.msg
end


return HarryPotterError
