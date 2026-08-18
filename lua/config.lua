-- HarryPotter SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "HarryPotter",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
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
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "alive",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "ancestry",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "core",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "dateOfBirth",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "eyeColour",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "hairColour",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "hogwartsStaff",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "hogwartsStudent",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "house",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "image",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "length",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "patronus",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "wand",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "wizard",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "wood",
            ["type"] = "`$STRING`",
          },
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
                ["parts"] = {
                  "api",
                  "characters",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/characters/staff",
                ["parts"] = {
                  "api",
                  "characters",
                  "staff",
                },
                ["select"] = {
                  ["$action"] = "staff",
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/characters/students",
                ["parts"] = {
                  "api",
                  "characters",
                  "students",
                },
                ["select"] = {
                  ["$action"] = "student",
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
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
                ["parts"] = {
                  "api",
                  "characters",
                  "house",
                  "{house}",
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
                ["parts"] = {
                  "api",
                  "character",
                  "{id}",
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
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["type"] = "`$STRING`",
          },
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
                ["parts"] = {
                  "api",
                  "spells",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
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
