"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const __1 = require("..");
const definition_runner_1 = require("./definition-runner");
const utility_1 = require("./utility");
// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN = [
    {
        "entity": "character",
        "accessor": "Character",
        "op": "list",
        "method": "GET",
        "path": "/api/characters",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": null,
        "status": 200,
        "sample": [
            {
                "id": "x",
                "name": "x",
                "house": "Gryffindor",
                "dateOfBirth": "x",
                "wizard": true,
                "ancestry": "x",
                "eyeColour": "x",
                "hairColour": "x",
                "wand": {
                    "wood": "x",
                    "core": "x",
                    "length": 1
                },
                "patronus": "x",
                "hogwartsStudent": true,
                "hogwartsStaff": true,
                "actor": "x",
                "alive": true,
                "image": "x"
            }
        ],
        "idField": "id"
    },
    {
        "entity": "character",
        "accessor": "Character",
        "op": "list",
        "method": "GET",
        "path": "/api/characters/staff",
        "action": "staff",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": null,
        "status": 200,
        "sample": [
            {
                "id": "x",
                "name": "x",
                "house": "Gryffindor",
                "dateOfBirth": "x",
                "wizard": true,
                "ancestry": "x",
                "eyeColour": "x",
                "hairColour": "x",
                "wand": {
                    "wood": "x",
                    "core": "x",
                    "length": 1
                },
                "patronus": "x",
                "hogwartsStudent": true,
                "hogwartsStaff": true,
                "actor": "x",
                "alive": true,
                "image": "x"
            }
        ],
        "idField": "id"
    },
    {
        "entity": "character",
        "accessor": "Character",
        "op": "list",
        "method": "GET",
        "path": "/api/characters/students",
        "action": "student",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": null,
        "status": 200,
        "sample": [
            {
                "id": "x",
                "name": "x",
                "house": "Gryffindor",
                "dateOfBirth": "x",
                "wizard": true,
                "ancestry": "x",
                "eyeColour": "x",
                "hairColour": "x",
                "wand": {
                    "wood": "x",
                    "core": "x",
                    "length": 1
                },
                "patronus": "x",
                "hogwartsStudent": true,
                "hogwartsStaff": true,
                "actor": "x",
                "alive": true,
                "image": "x"
            }
        ],
        "idField": "id"
    },
    {
        "entity": "character",
        "accessor": "Character",
        "op": "load",
        "method": "GET",
        "path": "/api/characters/house/{house}",
        "args": [
            {
                "name": "house",
                "wire": "house",
                "value": "gryffindor"
            }
        ],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": null,
        "status": 200,
        "sample": [
            {
                "id": "x",
                "name": "x",
                "house": "Gryffindor",
                "dateOfBirth": "x",
                "wizard": true,
                "ancestry": "x",
                "eyeColour": "x",
                "hairColour": "x",
                "wand": {
                    "wood": "x",
                    "core": "x",
                    "length": 1
                },
                "patronus": "x",
                "hogwartsStudent": true,
                "hogwartsStaff": true,
                "actor": "x",
                "alive": true,
                "image": "x"
            }
        ],
        "idField": "id"
    },
    {
        "entity": "character",
        "accessor": "Character",
        "op": "load",
        "method": "GET",
        "path": "/api/character/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8"
            }
        ],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": null,
        "status": 200,
        "sample": {
            "id": "x",
            "name": "x",
            "house": "Gryffindor",
            "dateOfBirth": "x",
            "wizard": true,
            "ancestry": "x",
            "eyeColour": "x",
            "hairColour": "x",
            "wand": {
                "wood": "x",
                "core": "x",
                "length": 1
            },
            "patronus": "x",
            "hogwartsStudent": true,
            "hogwartsStaff": true,
            "actor": "x",
            "alive": true,
            "image": "x"
        },
        "idField": "id"
    },
    {
        "entity": "spell",
        "accessor": "Spell",
        "op": "list",
        "method": "GET",
        "path": "/api/spells",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": null,
        "status": 200,
        "sample": [
            {
                "id": "x",
                "name": "x",
                "description": "x"
            }
        ],
        "idField": "id"
    }
];
(0, node_test_1.describe)('definition', () => {
    for (const point of PLAN) {
        (0, node_test_1.test)(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
            const control = (0, utility_1.isControlSkipped)('entityOp', point.entity + '.' + point.op, 'definition');
            if (control.skip) {
                t.skip(control.reason || 'skipped via sdk-test-control.json');
                return;
            }
            await (0, definition_runner_1.runDefinitionPoint)(__1.SDK, point);
        });
    }
});
//# sourceMappingURL=definition.test.js.map