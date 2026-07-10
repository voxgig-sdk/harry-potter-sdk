// Typed models for the HarryPotter SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Character is the typed data model for the character entity.
type Character struct {
	Actor *string `json:"actor,omitempty"`
	Alive *bool `json:"alive,omitempty"`
	Ancestry *string `json:"ancestry,omitempty"`
	DateOfBirth *string `json:"date_of_birth,omitempty"`
	EyeColour *string `json:"eye_colour,omitempty"`
	HairColour *string `json:"hair_colour,omitempty"`
	HogwartsStaff *bool `json:"hogwarts_staff,omitempty"`
	HogwartsStudent *bool `json:"hogwarts_student,omitempty"`
	House *string `json:"house,omitempty"`
	Id *string `json:"id,omitempty"`
	Image *string `json:"image,omitempty"`
	Name *string `json:"name,omitempty"`
	Patronus *string `json:"patronus,omitempty"`
	Wand *map[string]any `json:"wand,omitempty"`
	Wizard *bool `json:"wizard,omitempty"`
}

// CharacterLoadMatch is the typed request payload for Character.LoadTyped.
type CharacterLoadMatch struct {
	House *string `json:"house,omitempty"`
	Id *string `json:"id,omitempty"`
}

// CharacterListMatch is the typed request payload for Character.ListTyped.
type CharacterListMatch struct {
	Actor *string `json:"actor,omitempty"`
	Alive *bool `json:"alive,omitempty"`
	Ancestry *string `json:"ancestry,omitempty"`
	DateOfBirth *string `json:"date_of_birth,omitempty"`
	EyeColour *string `json:"eye_colour,omitempty"`
	HairColour *string `json:"hair_colour,omitempty"`
	HogwartsStaff *bool `json:"hogwarts_staff,omitempty"`
	HogwartsStudent *bool `json:"hogwarts_student,omitempty"`
	House *string `json:"house,omitempty"`
	Id *string `json:"id,omitempty"`
	Image *string `json:"image,omitempty"`
	Name *string `json:"name,omitempty"`
	Patronus *string `json:"patronus,omitempty"`
	Wand *map[string]any `json:"wand,omitempty"`
	Wizard *bool `json:"wizard,omitempty"`
}

// Spell is the typed data model for the spell entity.
type Spell struct {
	Description *string `json:"description,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

// SpellListMatch is the typed request payload for Spell.ListTyped.
type SpellListMatch struct {
	Description *string `json:"description,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
