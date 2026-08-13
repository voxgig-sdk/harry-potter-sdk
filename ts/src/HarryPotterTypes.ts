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
  core?: string
  dateOfBirth?: string
  eyeColour?: string
  hairColour?: string
  hogwartsStaff?: boolean
  hogwartsStudent?: boolean
  house?: string
  id?: string
  image?: string
  length?: number
  name?: string
  patronus?: string
  wand?: Record<string, any>
  wizard?: boolean
  wood?: string
}

export interface CharacterLoadMatch {
  house?: string
  id?: string
}

export interface CharacterListMatch {
  actor?: string
  alive?: boolean
  ancestry?: string
  core?: string
  dateOfBirth?: string
  eyeColour?: string
  hairColour?: string
  hogwartsStaff?: boolean
  hogwartsStudent?: boolean
  house?: string
  id?: string
  image?: string
  length?: number
  name?: string
  patronus?: string
  wand?: Record<string, any>
  wizard?: boolean
  wood?: string

  // Selects a custom action instead of the plain list:
  //   'staff' | 'student'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
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

