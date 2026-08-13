-- Typed models for the HarryPotter SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Character
---@field actor? string
---@field alive? boolean
---@field ancestry? string
---@field core? string
---@field dateOfBirth? string
---@field eyeColour? string
---@field hairColour? string
---@field hogwartsStaff? boolean
---@field hogwartsStudent? boolean
---@field house? string
---@field id? string
---@field image? string
---@field length? number
---@field name? string
---@field patronus? string
---@field wand? table
---@field wizard? boolean
---@field wood? string

---@class CharacterLoadMatch
---@field house? string
---@field id? string

---@class CharacterListMatch
---@field actor? string
---@field alive? boolean
---@field ancestry? string
---@field core? string
---@field dateOfBirth? string
---@field eyeColour? string
---@field hairColour? string
---@field hogwartsStaff? boolean
---@field hogwartsStudent? boolean
---@field house? string
---@field id? string
---@field image? string
---@field length? number
---@field name? string
---@field patronus? string
---@field wand? table
---@field wizard? boolean
---@field wood? string

---@class Spell
---@field description? string
---@field id? string
---@field name? string

---@class SpellListMatch
---@field description? string
---@field id? string
---@field name? string

local M = {}

return M
