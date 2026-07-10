// Typed models for the HarryPotter SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Character {
  actor?: string
  alive?: boolean
  ancestry?: string
  date_of_birth?: string
  eye_colour?: string
  hair_colour?: string
  hogwarts_staff?: boolean
  hogwarts_student?: boolean
  house?: string
  id?: string
  image?: string
  name?: string
  patronus?: string
  wand?: Record<string, any>
  wizard?: boolean
}

export interface CharacterLoadMatch {
  house?: string
  id?: string
}

export interface CharacterListMatch {
  actor?: string
  alive?: boolean
  ancestry?: string
  date_of_birth?: string
  eye_colour?: string
  hair_colour?: string
  hogwarts_staff?: boolean
  hogwarts_student?: boolean
  house?: string
  id?: string
  image?: string
  name?: string
  patronus?: string
  wand?: Record<string, any>
  wizard?: boolean
}

export interface Spell {
  description?: string
  id?: string
  name?: string
}

export interface SpellListMatch {
  description?: string
  id?: string
  name?: string
}

