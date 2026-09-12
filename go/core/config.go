package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "HarryPotter",
			"slug": "harry-potter",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://hp-api.onrender.com",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"character": map[string]any{},
				"spell": map[string]any{},
			},
		},
		"entity": map[string]any{
			"character": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "actor",
						"short": "Name of the actor who portrayed the character",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "alive",
						"short": "Whether the character is alive",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "ancestry",
						"short": "Ancestry of the character (e.g., pure-blood, half-blood, muggle-born)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "core",
						"short": "Core material of the wand",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "dateOfBirth",
						"short": "Date of birth of the character",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "eyeColour",
						"short": "Eye color of the character",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "hairColour",
						"short": "Hair color of the character",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "hogwartsStaff",
						"short": "Whether the character is a Hogwarts staff member",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "hogwartsStudent",
						"short": "Whether the character is a Hogwarts student",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "house",
						"short": "Hogwarts house the character belongs to",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uuid",
						"name": "id",
						"short": "Unique identifier for the character",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uri",
						"name": "image",
						"short": "URL to an image of the character",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "length",
						"short": "Length of the wand in inches",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "name",
						"short": "Name of the character",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "patronus",
						"short": "The character's Patronus form",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "wand",
						"short": "Information about the character's wand",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "wizard",
						"short": "Whether the character is a wizard or witch",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "wood",
						"short": "Type of wood the wand is made from",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "character",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/api/characters",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "characters",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"characters",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/api/characters/staff",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "characters",
									},
									map[string]any{
										"lit": "staff",
									},
								},
								"select": map[string]any{
									"$action": "staff",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"characters",
									"staff",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/api/characters/students",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "characters",
									},
									map[string]any{
										"lit": "students",
									},
								},
								"select": map[string]any{
									"$action": "student",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"characters",
									"students",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "gryffindor",
											"kind": "param",
											"name": "house",
											"orig": "house",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/characters/house/{house}",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "characters",
									},
									map[string]any{
										"lit": "house",
									},
									map[string]any{
										"var": "house",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"house",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"characters",
									"house",
									"{house}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/character/{id}",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "character",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.wand`",
								},
								"parts": []any{
									"api",
									"character",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"house",
						},
					},
				},
			},
			"spell": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "description",
						"short": "Description of what the spell does",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "Unique identifier for the spell",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"short": "Name of the spell",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "spell",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/api/spells",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "spells",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"spells",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
