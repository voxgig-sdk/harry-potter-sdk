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
      ["ratelimit"] = {
        ["options"] = {
          ["active"] = false,
          ["burst"] = 5,
          ["rate"] = 5,
        },
        ["optspec"] = {
          ["now"] = "`$FUNCTION`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["retry"] = {
        ["options"] = {
          ["active"] = false,
          ["factor"] = 2,
          ["maxDelay"] = 2000,
          ["minDelay"] = 50,
          ["retries"] = 2,
          ["statuses"] = {
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          },
        },
        ["optspec"] = {
          ["jitter"] = "`$BOOLEAN`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["optspec"] = {
          ["entity"] = "`$MAP`",
          ["net"] = "`$MAP`",
        },
        ["strict"] = false,
        ["transport"] = "base",
      },
      ["timeout"] = {
        ["options"] = {
          ["active"] = false,
          ["ms"] = 30000,
        },
        ["optspec"] = {
          ["clearTimer"] = "`$FUNCTION`",
          ["setTimer"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
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
            ["title"] = "Actor",
            ["type"] = "`$STRING`",
            ["short"] = "Name of the actor who portrayed the character",
          },
          {
            ["name"] = "alive",
            ["title"] = "Alive",
            ["type"] = "`$BOOLEAN`",
            ["short"] = "Whether the character is alive",
          },
          {
            ["name"] = "ancestry",
            ["title"] = "Ancestry",
            ["type"] = "`$STRING`",
            ["short"] = "Ancestry of the character (e.g., pure-blood, half-blood, muggle-born)",
          },
          {
            ["name"] = "core",
            ["title"] = "Core",
            ["type"] = "`$STRING`",
            ["short"] = "Core material of the wand",
          },
          {
            ["name"] = "dateOfBirth",
            ["title"] = "Date Of Birth",
            ["type"] = "`$STRING`",
            ["short"] = "Date of birth of the character",
          },
          {
            ["name"] = "eyeColour",
            ["title"] = "Eye Colour",
            ["type"] = "`$STRING`",
            ["short"] = "Eye color of the character",
          },
          {
            ["name"] = "hairColour",
            ["title"] = "Hair Colour",
            ["type"] = "`$STRING`",
            ["short"] = "Hair color of the character",
          },
          {
            ["name"] = "hogwartsStaff",
            ["title"] = "Hogwarts Staff",
            ["type"] = "`$BOOLEAN`",
            ["short"] = "Whether the character is a Hogwarts staff member",
          },
          {
            ["name"] = "hogwartsStudent",
            ["title"] = "Hogwarts Student",
            ["type"] = "`$BOOLEAN`",
            ["short"] = "Whether the character is a Hogwarts student",
          },
          {
            ["name"] = "house",
            ["title"] = "House",
            ["type"] = "`$STRING`",
            ["short"] = "Hogwarts house the character belongs to",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
            ["short"] = "Unique identifier for the character",
            ["format"] = "uuid",
          },
          {
            ["name"] = "image",
            ["title"] = "Image",
            ["type"] = "`$STRING`",
            ["short"] = "URL to an image of the character",
            ["format"] = "uri",
          },
          {
            ["name"] = "length",
            ["title"] = "Length",
            ["type"] = "`$NUMBER`",
            ["short"] = "Length of the wand in inches",
          },
          {
            ["name"] = "name",
            ["title"] = "Name",
            ["type"] = "`$STRING`",
            ["short"] = "Name of the character",
          },
          {
            ["name"] = "patronus",
            ["title"] = "Patronus",
            ["type"] = "`$STRING`",
            ["short"] = "The character's Patronus form",
          },
          {
            ["name"] = "wand",
            ["title"] = "Wand",
            ["type"] = "`$OBJECT`",
            ["short"] = "Information about the character's wand",
          },
          {
            ["name"] = "wizard",
            ["title"] = "Wizard",
            ["type"] = "`$BOOLEAN`",
            ["short"] = "Whether the character is a wizard or witch",
          },
          {
            ["name"] = "wood",
            ["title"] = "Wood",
            ["type"] = "`$STRING`",
            ["short"] = "Type of wood the wand is made from",
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
                ["parts"] = {
                  "api",
                  "characters",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {},
                ["select"] = {},
              },
              {
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
                ["parts"] = {
                  "api",
                  "characters",
                  "staff",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {},
                ["select"] = {
                  ["$action"] = "staff",
                },
              },
              {
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
                ["parts"] = {
                  "api",
                  "characters",
                  "students",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {},
                ["select"] = {
                  ["$action"] = "student",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
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
                ["parts"] = {
                  "api",
                  "characters",
                  "house",
                  "{house}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "house",
                      ["orig"] = "house",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "gryffindor",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "house",
                  },
                },
              },
              {
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
                ["parts"] = {
                  "api",
                  "character",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.wand`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["spell"] = {
        ["fields"] = {
          {
            ["name"] = "description",
            ["title"] = "Description",
            ["type"] = "`$STRING`",
            ["short"] = "Description of what the spell does",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
            ["short"] = "Unique identifier for the spell",
          },
          {
            ["name"] = "name",
            ["title"] = "Name",
            ["type"] = "`$STRING`",
            ["short"] = "Name of the spell",
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
                ["parts"] = {
                  "api",
                  "spells",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {},
                ["select"] = {},
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
