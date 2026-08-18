# frozen_string_literal: true

# Typed models for the HarryPotter SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Character entity data model.
#
# @!attribute [rw] actor
#   @return [String, nil]
#
# @!attribute [rw] alive
#   @return [Boolean, nil]
#
# @!attribute [rw] ancestry
#   @return [String, nil]
#
# @!attribute [rw] core
#   @return [String, nil]
#
# @!attribute [rw] dateOfBirth
#   @return [String, nil]
#
# @!attribute [rw] eyeColour
#   @return [String, nil]
#
# @!attribute [rw] hairColour
#   @return [String, nil]
#
# @!attribute [rw] hogwartsStaff
#   @return [Boolean, nil]
#
# @!attribute [rw] hogwartsStudent
#   @return [Boolean, nil]
#
# @!attribute [rw] house
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] image
#   @return [String, nil]
#
# @!attribute [rw] length
#   @return [Float, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] patronus
#   @return [String, nil]
#
# @!attribute [rw] wand
#   @return [Hash, nil]
#
# @!attribute [rw] wizard
#   @return [Boolean, nil]
#
# @!attribute [rw] wood
#   @return [String, nil]
Character = Struct.new(
  :actor,
  :alive,
  :ancestry,
  :core,
  :dateOfBirth,
  :eyeColour,
  :hairColour,
  :hogwartsStaff,
  :hogwartsStudent,
  :house,
  :id,
  :image,
  :length,
  :name,
  :patronus,
  :wand,
  :wizard,
  :wood,
  keyword_init: true
)

# Request payload for Character#load.
#
# @!attribute [rw] id
#   @return [String]
CharacterLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Character#list.
#
# @!attribute [rw] actor
#   @return [String, nil]
#
# @!attribute [rw] alive
#   @return [Boolean, nil]
#
# @!attribute [rw] ancestry
#   @return [String, nil]
#
# @!attribute [rw] core
#   @return [String, nil]
#
# @!attribute [rw] dateOfBirth
#   @return [String, nil]
#
# @!attribute [rw] eyeColour
#   @return [String, nil]
#
# @!attribute [rw] hairColour
#   @return [String, nil]
#
# @!attribute [rw] hogwartsStaff
#   @return [Boolean, nil]
#
# @!attribute [rw] hogwartsStudent
#   @return [Boolean, nil]
#
# @!attribute [rw] house
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] image
#   @return [String, nil]
#
# @!attribute [rw] length
#   @return [Float, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] patronus
#   @return [String, nil]
#
# @!attribute [rw] wand
#   @return [Hash, nil]
#
# @!attribute [rw] wizard
#   @return [Boolean, nil]
#
# @!attribute [rw] wood
#   @return [String, nil]
CharacterListMatch = Struct.new(
  :actor,
  :alive,
  :ancestry,
  :core,
  :dateOfBirth,
  :eyeColour,
  :hairColour,
  :hogwartsStaff,
  :hogwartsStudent,
  :house,
  :id,
  :image,
  :length,
  :name,
  :patronus,
  :wand,
  :wizard,
  :wood,
  keyword_init: true
)

# Spell entity data model.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
Spell = Struct.new(
  :description,
  :id,
  :name,
  keyword_init: true
)

# Request payload for Spell#list.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
SpellListMatch = Struct.new(
  :description,
  :id,
  :name,
  keyword_init: true
)

