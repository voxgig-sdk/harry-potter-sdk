# HarryPotter SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "HarryPotter",
            "slug": "harry-potter",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
        "transport": "base",
      },
        },
        "options": {
            "base": "https://hp-api.onrender.com",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "character": {},
                "spell": {},
            },
        },
        "entity": {
      "character": {
        "fields": [
          {
            "name": "actor",
            "short": "Name of the actor who portrayed the character",
            "type": "`$STRING`",
          },
          {
            "name": "alive",
            "short": "Whether the character is alive",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "ancestry",
            "short": "Ancestry of the character (e.g., pure-blood, half-blood, muggle-born)",
            "type": "`$STRING`",
          },
          {
            "name": "core",
            "short": "Core material of the wand",
            "type": "`$STRING`",
          },
          {
            "name": "dateOfBirth",
            "short": "Date of birth of the character",
            "type": "`$STRING`",
          },
          {
            "name": "eyeColour",
            "short": "Eye color of the character",
            "type": "`$STRING`",
          },
          {
            "name": "hairColour",
            "short": "Hair color of the character",
            "type": "`$STRING`",
          },
          {
            "name": "hogwartsStaff",
            "short": "Whether the character is a Hogwarts staff member",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "hogwartsStudent",
            "short": "Whether the character is a Hogwarts student",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "house",
            "short": "Hogwarts house the character belongs to",
            "type": "`$STRING`",
          },
          {
            "format": "uuid",
            "name": "id",
            "short": "Unique identifier for the character",
            "type": "`$STRING`",
          },
          {
            "format": "uri",
            "name": "image",
            "short": "URL to an image of the character",
            "type": "`$STRING`",
          },
          {
            "name": "length",
            "short": "Length of the wand in inches",
            "type": "`$NUMBER`",
          },
          {
            "name": "name",
            "short": "Name of the character",
            "type": "`$STRING`",
          },
          {
            "name": "patronus",
            "short": "The character's Patronus form",
            "type": "`$STRING`",
          },
          {
            "name": "wand",
            "short": "Information about the character's wand",
            "type": "`$OBJECT`",
          },
          {
            "name": "wizard",
            "short": "Whether the character is a wizard or witch",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "wood",
            "short": "Type of wood the wand is made from",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "character",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/api/characters",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "characters",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "api",
                  "characters",
                ],
              },
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/api/characters/staff",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "characters",
                  },
                  {
                    "lit": "staff",
                  },
                ],
                "select": {
                  "$action": "staff",
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "api",
                  "characters",
                  "staff",
                ],
              },
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/api/characters/students",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "characters",
                  },
                  {
                    "lit": "students",
                  },
                ],
                "select": {
                  "$action": "student",
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "api",
                  "characters",
                  "students",
                ],
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": "gryffindor",
                      "kind": "param",
                      "name": "house",
                      "orig": "house",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/characters/house/{house}",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "characters",
                  },
                  {
                    "lit": "house",
                  },
                  {
                    "var": "house",
                  },
                ],
                "select": {
                  "exist": [
                    "house",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "api",
                  "characters",
                  "house",
                  "{house}",
                ],
              },
              {
                "args": {
                  "params": [
                    {
                      "example": "9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/character/{id}",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "character",
                  },
                  {
                    "var": "id",
                  },
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.wand`",
                },
                "parts": [
                  "api",
                  "character",
                  "{id}",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "house",
            ],
          ],
        },
      },
      "spell": {
        "fields": [
          {
            "name": "description",
            "short": "Description of what the spell does",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "short": "Unique identifier for the spell",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "short": "Name of the spell",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "spell",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/api/spells",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "spells",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "api",
                  "spells",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
