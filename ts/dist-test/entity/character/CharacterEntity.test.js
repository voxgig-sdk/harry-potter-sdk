"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('CharacterEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when HARRY_POTTER_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('HARRY_POTTER_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.HarryPotterSDK.test();
        const ent = testsdk.Character();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.HARRY_POTTER_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'character.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "actor": { "a": true, "h": "Actor", "n": "actor", "r": false, "sh": "Name of the actor who portrayed the character", "t": "`$STRING`", "key$": "actor", "index$": 0 }, "alive": { "a": true, "h": "Alive", "n": "alive", "r": false, "sh": "Whether the character is alive", "t": "`$BOOLEAN`", "key$": "alive", "index$": 1 }, "ancestry": { "a": true, "h": "Ancestry", "n": "ancestry", "r": false, "sh": "Ancestry of the character (e.g., pure-blood, half-blood, muggle-born)", "t": "`$STRING`", "key$": "ancestry", "index$": 2 }, "core": { "a": true, "h": "Core", "n": "core", "r": false, "sh": "Core material of the wand", "t": "`$STRING`", "key$": "core", "index$": 3 }, "dateOfBirth": { "a": true, "h": "Date Of Birth", "n": "dateOfBirth", "r": false, "sh": "Date of birth of the character", "t": "`$STRING`", "key$": "dateOfBirth", "index$": 4 }, "eyeColour": { "a": true, "h": "Eye Colour", "n": "eyeColour", "r": false, "sh": "Eye color of the character", "t": "`$STRING`", "key$": "eyeColour", "index$": 5 }, "hairColour": { "a": true, "h": "Hair Colour", "n": "hairColour", "r": false, "sh": "Hair color of the character", "t": "`$STRING`", "key$": "hairColour", "index$": 6 }, "hogwartsStaff": { "a": true, "h": "Hogwarts Staff", "n": "hogwartsStaff", "r": false, "sh": "Whether the character is a Hogwarts staff member", "t": "`$BOOLEAN`", "key$": "hogwartsStaff", "index$": 7 }, "hogwartsStudent": { "a": true, "h": "Hogwarts Student", "n": "hogwartsStudent", "r": false, "sh": "Whether the character is a Hogwarts student", "t": "`$BOOLEAN`", "key$": "hogwartsStudent", "index$": 8 }, "house": { "a": true, "h": "House", "n": "house", "r": false, "sh": "Hogwarts house the character belongs to", "t": "`$STRING`", "key$": "house", "index$": 9 }, "id": { "a": true, "fo": "uuid", "h": "Id", "n": "id", "r": false, "sh": "Unique identifier for the character", "t": "`$STRING`", "key$": "id", "index$": 10 }, "image": { "a": true, "fo": "uri", "h": "Image", "n": "image", "r": false, "sh": "URL to an image of the character", "t": "`$STRING`", "key$": "image", "index$": 11 }, "length": { "a": true, "h": "Length", "n": "length", "r": false, "sh": "Length of the wand in inches", "t": "`$NUMBER`", "key$": "length", "index$": 12 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "sh": "Name of the character", "t": "`$STRING`", "key$": "name", "index$": 13 }, "patronus": { "a": true, "h": "Patronus", "n": "patronus", "r": false, "sh": "The character's Patronus form", "t": "`$STRING`", "key$": "patronus", "index$": 14 }, "wand": { "a": true, "h": "Wand", "n": "wand", "r": false, "sh": "Information about the character's wand", "t": "`$OBJECT`", "key$": "wand", "index$": 15 }, "wizard": { "a": true, "h": "Wizard", "n": "wizard", "r": false, "sh": "Whether the character is a wizard or witch", "t": "`$BOOLEAN`", "key$": "wizard", "index$": 16 }, "wood": { "a": true, "h": "Wood", "n": "wood", "r": false, "sh": "Type of wood the wand is made from", "t": "`$STRING`", "key$": "wood", "index$": 17 } }, "id": { "field": "id", "name": "id" }, "name": "character", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /api/characters", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/api/characters", "q": {}, "r": {}, "s": [{ "lit": "api" }, { "lit": "characters" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /api/characters/staff", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/api/characters/staff", "q": { "$action": "staff" }, "r": {}, "s": [{ "lit": "api" }, { "lit": "characters" }, { "lit": "staff" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "GET /api/characters/students", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/api/characters/students", "q": { "$action": "student" }, "r": {}, "s": [{ "lit": "api" }, { "lit": "characters" }, { "lit": "students" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/characters/house/{house}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "gryffindor", "k": "param", "n": "house", "or": "house", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/characters/house/{house}", "q": { "exist": ["house"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "characters" }, { "lit": "house" }, { "var": "house" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /api/character/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/character/{id}", "q": { "exist": ["id"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "character" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.wand`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "character", "name__orig": "character", "Name": "Character", "name_": "character", "name-": "character", "NAME": "CHARACTER", "index$": 0 }, { "active": true, "entity": "character", "key$": "BasicCharacterFlow", "kind": "basic", "name": "BasicCharacterFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "character_ref01" } }], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "character_ref01", "srcdatavar": "character_ref01_data", "suffix": "_dt0" }, "m": { "id": "character01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-character_ref01" } }], "index$": 1 }] }, 'Character', { "GET /api/characters": { "protocol": "http", "operationId": "getAllCharacters", "responses": { "200": { "description": "Successful response with all characters", "content": { "application/json": { "schema": { "type": "array", "items": { "type": "object", "description": "A character from the Harry Potter universe", "properties": { "id": { "type": "string", "format": "uuid", "description": "Unique identifier for the character", "key$": "id" }, "name": { "type": "string", "description": "Name of the character", "key$": "name" }, "house": { "type": "string", "description": "Hogwarts house the character belongs to", "enum": ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff", ""], "key$": "house" }, "dateOfBirth": { "type": "string", "description": "Date of birth of the character", "key$": "dateOfBirth" }, "wizard": { "type": "boolean", "description": "Whether the character is a wizard or witch", "key$": "wizard" }, "ancestry": { "type": "string", "description": "Ancestry of the character (e.g., pure-blood, half-blood, muggle-born)", "key$": "ancestry" }, "eyeColour": { "type": "string", "description": "Eye color of the character", "key$": "eyeColour" }, "hairColour": { "type": "string", "description": "Hair color of the character", "key$": "hairColour" }, "wand": { "type": "object", "description": "Information about the character's wand", "properties": { "wood": { "type": "string", "description": "Type of wood the wand is made from", "key$": "wood" }, "core": { "type": "string", "description": "Core material of the wand", "key$": "core" }, "length": { "type": "number", "description": "Length of the wand in inches", "key$": "length" } }, "key$": "wand", "index$": 0 }, "patronus": { "type": "string", "description": "The character's Patronus form", "key$": "patronus" }, "hogwartsStudent": { "type": "boolean", "description": "Whether the character is a Hogwarts student", "key$": "hogwartsStudent" }, "hogwartsStaff": { "type": "boolean", "description": "Whether the character is a Hogwarts staff member", "key$": "hogwartsStaff" }, "actor": { "type": "string", "description": "Name of the actor who portrayed the character", "key$": "actor" }, "alive": { "type": "boolean", "description": "Whether the character is alive", "key$": "alive" }, "image": { "type": "string", "format": "uri", "description": "URL to an image of the character", "key$": "image" } }, "x-ref": "#/components/schemas/Character", "index$": 0 } } } } } }, "parameters": [], "securitySource": "unspecified" }, "GET /api/characters/staff": { "protocol": "http", "operationId": "getStaff", "responses": { "200": { "description": "Successful response with all staff members", "content": { "application/json": { "schema": { "type": "array", "items": { "type": "object", "description": "A character from the Harry Potter universe", "properties": { "id": { "type": "string", "format": "uuid", "description": "Unique identifier for the character", "key$": "id" }, "name": { "type": "string", "description": "Name of the character", "key$": "name" }, "house": { "type": "string", "description": "Hogwarts house the character belongs to", "enum": ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff", ""], "key$": "house" }, "dateOfBirth": { "type": "string", "description": "Date of birth of the character", "key$": "dateOfBirth" }, "wizard": { "type": "boolean", "description": "Whether the character is a wizard or witch", "key$": "wizard" }, "ancestry": { "type": "string", "description": "Ancestry of the character (e.g., pure-blood, half-blood, muggle-born)", "key$": "ancestry" }, "eyeColour": { "type": "string", "description": "Eye color of the character", "key$": "eyeColour" }, "hairColour": { "type": "string", "description": "Hair color of the character", "key$": "hairColour" }, "wand": { "type": "object", "description": "Information about the character's wand", "properties": { "wood": { "type": "string", "description": "Type of wood the wand is made from", "key$": "wood" }, "core": { "type": "string", "description": "Core material of the wand", "key$": "core" }, "length": { "type": "number", "description": "Length of the wand in inches", "key$": "length" } }, "key$": "wand", "index$": 0 }, "patronus": { "type": "string", "description": "The character's Patronus form", "key$": "patronus" }, "hogwartsStudent": { "type": "boolean", "description": "Whether the character is a Hogwarts student", "key$": "hogwartsStudent" }, "hogwartsStaff": { "type": "boolean", "description": "Whether the character is a Hogwarts staff member", "key$": "hogwartsStaff" }, "actor": { "type": "string", "description": "Name of the actor who portrayed the character", "key$": "actor" }, "alive": { "type": "boolean", "description": "Whether the character is alive", "key$": "alive" }, "image": { "type": "string", "format": "uri", "description": "URL to an image of the character", "key$": "image" } }, "x-ref": "#/components/schemas/Character", "index$": 0 } } } } } }, "parameters": [], "securitySource": "unspecified" }, "GET /api/characters/students": { "protocol": "http", "operationId": "getStudents", "responses": { "200": { "description": "Successful response with all students", "content": { "application/json": { "schema": { "type": "array", "items": { "type": "object", "description": "A character from the Harry Potter universe", "properties": { "id": { "type": "string", "format": "uuid", "description": "Unique identifier for the character", "key$": "id" }, "name": { "type": "string", "description": "Name of the character", "key$": "name" }, "house": { "type": "string", "description": "Hogwarts house the character belongs to", "enum": ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff", ""], "key$": "house" }, "dateOfBirth": { "type": "string", "description": "Date of birth of the character", "key$": "dateOfBirth" }, "wizard": { "type": "boolean", "description": "Whether the character is a wizard or witch", "key$": "wizard" }, "ancestry": { "type": "string", "description": "Ancestry of the character (e.g., pure-blood, half-blood, muggle-born)", "key$": "ancestry" }, "eyeColour": { "type": "string", "description": "Eye color of the character", "key$": "eyeColour" }, "hairColour": { "type": "string", "description": "Hair color of the character", "key$": "hairColour" }, "wand": { "type": "object", "description": "Information about the character's wand", "properties": { "wood": { "type": "string", "description": "Type of wood the wand is made from", "key$": "wood" }, "core": { "type": "string", "description": "Core material of the wand", "key$": "core" }, "length": { "type": "number", "description": "Length of the wand in inches", "key$": "length" } }, "key$": "wand", "index$": 0 }, "patronus": { "type": "string", "description": "The character's Patronus form", "key$": "patronus" }, "hogwartsStudent": { "type": "boolean", "description": "Whether the character is a Hogwarts student", "key$": "hogwartsStudent" }, "hogwartsStaff": { "type": "boolean", "description": "Whether the character is a Hogwarts staff member", "key$": "hogwartsStaff" }, "actor": { "type": "string", "description": "Name of the actor who portrayed the character", "key$": "actor" }, "alive": { "type": "boolean", "description": "Whether the character is alive", "key$": "alive" }, "image": { "type": "string", "format": "uri", "description": "URL to an image of the character", "key$": "image" } }, "x-ref": "#/components/schemas/Character", "index$": 0 } } } } } }, "parameters": [], "securitySource": "unspecified" }, "GET /api/characters/house/{house}": { "protocol": "http", "operationId": "getCharactersByHouse", "responses": { "200": { "description": "Successful response with characters from the specified house", "content": { "application/json": { "schema": { "type": "array", "items": { "type": "object", "description": "A character from the Harry Potter universe", "properties": { "id": { "type": "string", "format": "uuid", "description": "Unique identifier for the character", "key$": "id" }, "name": { "type": "string", "description": "Name of the character", "key$": "name" }, "house": { "type": "string", "description": "Hogwarts house the character belongs to", "enum": ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff", ""], "key$": "house" }, "dateOfBirth": { "type": "string", "description": "Date of birth of the character", "key$": "dateOfBirth" }, "wizard": { "type": "boolean", "description": "Whether the character is a wizard or witch", "key$": "wizard" }, "ancestry": { "type": "string", "description": "Ancestry of the character (e.g., pure-blood, half-blood, muggle-born)", "key$": "ancestry" }, "eyeColour": { "type": "string", "description": "Eye color of the character", "key$": "eyeColour" }, "hairColour": { "type": "string", "description": "Hair color of the character", "key$": "hairColour" }, "wand": { "type": "object", "description": "Information about the character's wand", "properties": { "wood": { "type": "string", "description": "Type of wood the wand is made from", "key$": "wood" }, "core": { "type": "string", "description": "Core material of the wand", "key$": "core" }, "length": { "type": "number", "description": "Length of the wand in inches", "key$": "length" } }, "key$": "wand", "index$": 0 }, "patronus": { "type": "string", "description": "The character's Patronus form", "key$": "patronus" }, "hogwartsStudent": { "type": "boolean", "description": "Whether the character is a Hogwarts student", "key$": "hogwartsStudent" }, "hogwartsStaff": { "type": "boolean", "description": "Whether the character is a Hogwarts staff member", "key$": "hogwartsStaff" }, "actor": { "type": "string", "description": "Name of the actor who portrayed the character", "key$": "actor" }, "alive": { "type": "boolean", "description": "Whether the character is alive", "key$": "alive" }, "image": { "type": "string", "format": "uri", "description": "URL to an image of the character", "key$": "image" } }, "x-ref": "#/components/schemas/Character", "key$": "items" } } } } }, "404": { "description": "House not found" } }, "parameters": [{ "name": "house", "in": "path", "required": true, "description": "Name of the Hogwarts house", "schema": { "type": "string", "enum": ["gryffindor", "slytherin", "ravenclaw", "hufflepuff"] }, "example": "gryffindor", "index$": 0 }], "securitySource": "unspecified" }, "GET /api/character/{id}": { "protocol": "http", "operationId": "getCharacterById", "responses": { "200": { "description": "Successful response with character details", "content": { "application/json": { "schema": { "type": "object", "description": "A character from the Harry Potter universe", "properties": { "id": { "type": "string", "format": "uuid", "description": "Unique identifier for the character", "key$": "id" }, "name": { "type": "string", "description": "Name of the character", "key$": "name" }, "house": { "type": "string", "description": "Hogwarts house the character belongs to", "enum": ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff", ""], "key$": "house" }, "dateOfBirth": { "type": "string", "description": "Date of birth of the character", "key$": "dateOfBirth" }, "wizard": { "type": "boolean", "description": "Whether the character is a wizard or witch", "key$": "wizard" }, "ancestry": { "type": "string", "description": "Ancestry of the character (e.g., pure-blood, half-blood, muggle-born)", "key$": "ancestry" }, "eyeColour": { "type": "string", "description": "Eye color of the character", "key$": "eyeColour" }, "hairColour": { "type": "string", "description": "Hair color of the character", "key$": "hairColour" }, "wand": { "type": "object", "description": "Information about the character's wand", "properties": { "wood": { "type": "string", "description": "Type of wood the wand is made from", "key$": "wood" }, "core": { "type": "string", "description": "Core material of the wand", "key$": "core" }, "length": { "type": "number", "description": "Length of the wand in inches", "key$": "length" } }, "key$": "wand", "index$": 0 }, "patronus": { "type": "string", "description": "The character's Patronus form", "key$": "patronus" }, "hogwartsStudent": { "type": "boolean", "description": "Whether the character is a Hogwarts student", "key$": "hogwartsStudent" }, "hogwartsStaff": { "type": "boolean", "description": "Whether the character is a Hogwarts staff member", "key$": "hogwartsStaff" }, "actor": { "type": "string", "description": "Name of the actor who portrayed the character", "key$": "actor" }, "alive": { "type": "boolean", "description": "Whether the character is alive", "key$": "alive" }, "image": { "type": "string", "format": "uri", "description": "URL to an image of the character", "key$": "image" } }, "x-ref": "#/components/schemas/Character" } } } }, "404": { "description": "Character not found" } }, "parameters": [{ "name": "id", "in": "path", "required": true, "description": "Unique identifier of the character", "schema": { "type": "string", "format": "uuid" }, "example": "9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8", "index$": 0 }], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let character_ref01_data = Object.values(setup.data.existing.character)[0];
        // LIST
        const character_ref01_ent = client.Character();
        const character_ref01_match = {};
        const character_ref01_list = (await character_ref01_ent.list(character_ref01_match)).map((e) => e.data());
        // LOAD
        const character_ref01_match_dt0 = {};
        character_ref01_match_dt0.id = character_ref01_data.id;
        const character_ref01_data_dt0 = (await character_ref01_ent.load(character_ref01_match_dt0)).data();
        (0, node_assert_1.default)(character_ref01_data_dt0.id === character_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/character/CharacterTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.HarryPotterSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['character01', 'character02', 'character03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'HARRY_POTTER_TEST_CHARACTER_ENTID': idmap,
        'HARRY_POTTER_TEST_LIVE': 'FALSE',
        'HARRY_POTTER_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['HARRY_POTTER_TEST_CHARACTER_ENTID'];
    const live = 'TRUE' === env.HARRY_POTTER_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['HARRY_POTTER_TEST_CHARACTER_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.HarryPotterSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.HARRY_POTTER_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=CharacterEntity.test.js.map