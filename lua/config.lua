-- HarryPotter SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "HarryPotter",
      slug = "harry-potter",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["transport"] = "base",
      },
    },
    options = {
      base = "https://hp-api.onrender.com",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["character"] = {},
        ["spell"] = {},
      },
    },
    entity = {
      ["character"] = {
        ["fields"] = {
          {
            ["name"] = "actor",
            ["short"] = "Name of the actor who portrayed the character",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "alive",
            ["short"] = "Whether the character is alive",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "ancestry",
            ["short"] = "Ancestry of the character (e.g., pure-blood, half-blood, muggle-born)",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "core",
            ["short"] = "Core material of the wand",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "dateOfBirth",
            ["short"] = "Date of birth of the character",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "eyeColour",
            ["short"] = "Eye color of the character",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "hairColour",
            ["short"] = "Hair color of the character",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "hogwartsStaff",
            ["short"] = "Whether the character is a Hogwarts staff member",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "hogwartsStudent",
            ["short"] = "Whether the character is a Hogwarts student",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "house",
            ["short"] = "Hogwarts house the character belongs to",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "uuid",
            ["name"] = "id",
            ["short"] = "Unique identifier for the character",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "uri",
            ["name"] = "image",
            ["short"] = "URL to an image of the character",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "length",
            ["short"] = "Length of the wand in inches",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "name",
            ["short"] = "Name of the character",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "patronus",
            ["short"] = "The character's Patronus form",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "wand",
            ["short"] = "Information about the character's wand",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "wizard",
            ["short"] = "Whether the character is a wizard or witch",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "wood",
            ["short"] = "Type of wood the wand is made from",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "character",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/characters",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "characters",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "characters",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/characters/staff",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "characters",
                  },
                  {
                    ["lit"] = "staff",
                  },
                },
                ["select"] = {
                  ["$action"] = "staff",
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "characters",
                  "staff",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/characters/students",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "characters",
                  },
                  {
                    ["lit"] = "students",
                  },
                },
                ["select"] = {
                  ["$action"] = "student",
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "characters",
                  "students",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["example"] = "gryffindor",
                      ["kind"] = "param",
                      ["name"] = "house",
                      ["orig"] = "house",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/characters/house/{house}",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "characters",
                  },
                  {
                    ["lit"] = "house",
                  },
                  {
                    ["var"] = "house",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "house",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "characters",
                  "house",
                  "{house}",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["example"] = "9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8",
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/character/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "character",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.wand`",
                },
                ["parts"] = {
                  "api",
                  "character",
                  "{id}",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "house",
            },
          },
        },
      },
      ["spell"] = {
        ["fields"] = {
          {
            ["name"] = "description",
            ["short"] = "Description of what the spell does",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["short"] = "Unique identifier for the spell",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["short"] = "Name of the spell",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "spell",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/spells",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "spells",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "spells",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
