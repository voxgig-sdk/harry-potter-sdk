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
# @!attribute [rw] date_of_birth
#   @return [String, nil]
#
# @!attribute [rw] eye_colour
#   @return [String, nil]
#
# @!attribute [rw] hair_colour
#   @return [String, nil]
#
# @!attribute [rw] hogwarts_staff
#   @return [Boolean, nil]
#
# @!attribute [rw] hogwarts_student
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
Character = Struct.new(
  :actor,
  :alive,
  :ancestry,
  :date_of_birth,
  :eye_colour,
  :hair_colour,
  :hogwarts_staff,
  :hogwarts_student,
  :house,
  :id,
  :image,
  :name,
  :patronus,
  :wand,
  :wizard,
  keyword_init: true
)

# Request payload for Character#load.
#
# @!attribute [rw] house
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
CharacterLoadMatch = Struct.new(
  :house,
  :id,
  keyword_init: true
)

# Match filter for Character#list (any subset of Character fields).
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
# @!attribute [rw] date_of_birth
#   @return [String, nil]
#
# @!attribute [rw] eye_colour
#   @return [String, nil]
#
# @!attribute [rw] hair_colour
#   @return [String, nil]
#
# @!attribute [rw] hogwarts_staff
#   @return [Boolean, nil]
#
# @!attribute [rw] hogwarts_student
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
CharacterListMatch = Struct.new(
  :actor,
  :alive,
  :ancestry,
  :date_of_birth,
  :eye_colour,
  :hair_colour,
  :hogwarts_staff,
  :hogwarts_student,
  :house,
  :id,
  :image,
  :name,
  :patronus,
  :wand,
  :wizard,
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

# Match filter for Spell#list (any subset of Spell fields).
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

