

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { HarryPotterSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('CharacterEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HARRY_POTTER_TEST_LIVE=TRUE.
  afterEach(liveDelay('HARRY_POTTER_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HarryPotterSDK.test()
    const ent = testsdk.Character()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.HARRY_POTTER_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'character.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"actor","req":false,"short":"Name of the actor who portrayed the character","type":"`$STRING`","index$":0},{"active":true,"name":"alive","req":false,"short":"Whether the character is alive","type":"`$BOOLEAN`","index$":1},{"active":true,"name":"ancestry","req":false,"short":"Ancestry of the character (e.g., pure-blood, half-blood, muggle-born)","type":"`$STRING`","index$":2},{"active":true,"name":"core","req":false,"short":"Core material of the wand","type":"`$STRING`","index$":3},{"active":true,"name":"dateOfBirth","req":false,"short":"Date of birth of the character","type":"`$STRING`","index$":4},{"active":true,"name":"eyeColour","req":false,"short":"Eye color of the character","type":"`$STRING`","index$":5},{"active":true,"name":"hairColour","req":false,"short":"Hair color of the character","type":"`$STRING`","index$":6},{"active":true,"name":"hogwartsStaff","req":false,"short":"Whether the character is a Hogwarts staff member","type":"`$BOOLEAN`","index$":7},{"active":true,"name":"hogwartsStudent","req":false,"short":"Whether the character is a Hogwarts student","type":"`$BOOLEAN`","index$":8},{"active":true,"name":"house","req":false,"short":"Hogwarts house the character belongs to","type":"`$STRING`","index$":9},{"active":true,"format":"uuid","name":"id","req":false,"short":"Unique identifier for the character","type":"`$STRING`","index$":10},{"active":true,"format":"uri","name":"image","req":false,"short":"URL to an image of the character","type":"`$STRING`","index$":11},{"active":true,"name":"length","req":false,"short":"Length of the wand in inches","type":"`$NUMBER`","index$":12},{"active":true,"name":"name","req":false,"short":"Name of the character","type":"`$STRING`","index$":13},{"active":true,"name":"patronus","req":false,"short":"The character's Patronus form","type":"`$STRING`","index$":14},{"active":true,"name":"wand","req":false,"short":"Information about the character's wand","type":"`$OBJECT`","index$":15},{"active":true,"name":"wizard","req":false,"short":"Whether the character is a wizard or witch","type":"`$BOOLEAN`","index$":16},{"active":true,"name":"wood","req":false,"short":"Type of wood the wand is made from","type":"`$STRING`","index$":17}],"id":{"field":"id","name":"id"},"name":"character","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{},"contract":{"id":"GET /api/characters","json":"{\"operationId\":\"getAllCharacters\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"description\":\"A character from the Harry Potter universe\",\"properties\":{\"actor\":{\"description\":\"Name of the actor who portrayed the character\",\"type\":\"string\"},\"alive\":{\"description\":\"Whether the character is alive\",\"type\":\"boolean\"},\"ancestry\":{\"description\":\"Ancestry of the character (e.g., pure-blood, half-blood, muggle-born)\",\"type\":\"string\"},\"dateOfBirth\":{\"description\":\"Date of birth of the character\",\"type\":\"string\"},\"eyeColour\":{\"description\":\"Eye color of the character\",\"type\":\"string\"},\"hairColour\":{\"description\":\"Hair color of the character\",\"type\":\"string\"},\"hogwartsStaff\":{\"description\":\"Whether the character is a Hogwarts staff member\",\"type\":\"boolean\"},\"hogwartsStudent\":{\"description\":\"Whether the character is a Hogwarts student\",\"type\":\"boolean\"},\"house\":{\"description\":\"Hogwarts house the character belongs to\",\"enum\":[\"Gryffindor\",\"Slytherin\",\"Ravenclaw\",\"Hufflepuff\",\"\"],\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the character\",\"format\":\"uuid\",\"type\":\"string\"},\"image\":{\"description\":\"URL to an image of the character\",\"format\":\"uri\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the character\",\"type\":\"string\"},\"patronus\":{\"description\":\"The character's Patronus form\",\"type\":\"string\"},\"wand\":{\"description\":\"Information about the character's wand\",\"properties\":{\"core\":{\"description\":\"Core material of the wand\",\"type\":\"string\"},\"length\":{\"description\":\"Length of the wand in inches\",\"type\":\"number\"},\"wood\":{\"description\":\"Type of wood the wand is made from\",\"type\":\"string\"}},\"type\":\"object\"},\"wizard\":{\"description\":\"Whether the character is a wizard or witch\",\"type\":\"boolean\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Successful response with all characters\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/characters","segments":[{"lit":"api"},{"lit":"characters"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{},"contract":{"id":"GET /api/characters/staff","json":"{\"operationId\":\"getStaff\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"description\":\"A character from the Harry Potter universe\",\"properties\":{\"actor\":{\"description\":\"Name of the actor who portrayed the character\",\"type\":\"string\"},\"alive\":{\"description\":\"Whether the character is alive\",\"type\":\"boolean\"},\"ancestry\":{\"description\":\"Ancestry of the character (e.g., pure-blood, half-blood, muggle-born)\",\"type\":\"string\"},\"dateOfBirth\":{\"description\":\"Date of birth of the character\",\"type\":\"string\"},\"eyeColour\":{\"description\":\"Eye color of the character\",\"type\":\"string\"},\"hairColour\":{\"description\":\"Hair color of the character\",\"type\":\"string\"},\"hogwartsStaff\":{\"description\":\"Whether the character is a Hogwarts staff member\",\"type\":\"boolean\"},\"hogwartsStudent\":{\"description\":\"Whether the character is a Hogwarts student\",\"type\":\"boolean\"},\"house\":{\"description\":\"Hogwarts house the character belongs to\",\"enum\":[\"Gryffindor\",\"Slytherin\",\"Ravenclaw\",\"Hufflepuff\",\"\"],\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the character\",\"format\":\"uuid\",\"type\":\"string\"},\"image\":{\"description\":\"URL to an image of the character\",\"format\":\"uri\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the character\",\"type\":\"string\"},\"patronus\":{\"description\":\"The character's Patronus form\",\"type\":\"string\"},\"wand\":{\"description\":\"Information about the character's wand\",\"properties\":{\"core\":{\"description\":\"Core material of the wand\",\"type\":\"string\"},\"length\":{\"description\":\"Length of the wand in inches\",\"type\":\"number\"},\"wood\":{\"description\":\"Type of wood the wand is made from\",\"type\":\"string\"}},\"type\":\"object\"},\"wizard\":{\"description\":\"Whether the character is a wizard or witch\",\"type\":\"boolean\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Successful response with all staff members\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/characters/staff","segments":[{"lit":"api"},{"lit":"characters"},{"lit":"staff"}],"select":{"$action":"staff"},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1},{"active":true,"args":{},"contract":{"id":"GET /api/characters/students","json":"{\"operationId\":\"getStudents\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"description\":\"A character from the Harry Potter universe\",\"properties\":{\"actor\":{\"description\":\"Name of the actor who portrayed the character\",\"type\":\"string\"},\"alive\":{\"description\":\"Whether the character is alive\",\"type\":\"boolean\"},\"ancestry\":{\"description\":\"Ancestry of the character (e.g., pure-blood, half-blood, muggle-born)\",\"type\":\"string\"},\"dateOfBirth\":{\"description\":\"Date of birth of the character\",\"type\":\"string\"},\"eyeColour\":{\"description\":\"Eye color of the character\",\"type\":\"string\"},\"hairColour\":{\"description\":\"Hair color of the character\",\"type\":\"string\"},\"hogwartsStaff\":{\"description\":\"Whether the character is a Hogwarts staff member\",\"type\":\"boolean\"},\"hogwartsStudent\":{\"description\":\"Whether the character is a Hogwarts student\",\"type\":\"boolean\"},\"house\":{\"description\":\"Hogwarts house the character belongs to\",\"enum\":[\"Gryffindor\",\"Slytherin\",\"Ravenclaw\",\"Hufflepuff\",\"\"],\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the character\",\"format\":\"uuid\",\"type\":\"string\"},\"image\":{\"description\":\"URL to an image of the character\",\"format\":\"uri\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the character\",\"type\":\"string\"},\"patronus\":{\"description\":\"The character's Patronus form\",\"type\":\"string\"},\"wand\":{\"description\":\"Information about the character's wand\",\"properties\":{\"core\":{\"description\":\"Core material of the wand\",\"type\":\"string\"},\"length\":{\"description\":\"Length of the wand in inches\",\"type\":\"number\"},\"wood\":{\"description\":\"Type of wood the wand is made from\",\"type\":\"string\"}},\"type\":\"object\"},\"wizard\":{\"description\":\"Whether the character is a wizard or witch\",\"type\":\"boolean\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Successful response with all students\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/characters/students","segments":[{"lit":"api"},{"lit":"characters"},{"lit":"students"}],"select":{"$action":"student"},"transform":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":"gryffindor","kind":"param","name":"house","orig":"house","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /api/characters/house/{house}","json":"{\"operationId\":\"getCharactersByHouse\",\"parameters\":[{\"description\":\"Name of the Hogwarts house\",\"example\":\"gryffindor\",\"in\":\"path\",\"name\":\"house\",\"required\":true,\"schema\":{\"enum\":[\"gryffindor\",\"slytherin\",\"ravenclaw\",\"hufflepuff\"],\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"description\":\"A character from the Harry Potter universe\",\"properties\":{\"actor\":{\"description\":\"Name of the actor who portrayed the character\",\"type\":\"string\"},\"alive\":{\"description\":\"Whether the character is alive\",\"type\":\"boolean\"},\"ancestry\":{\"description\":\"Ancestry of the character (e.g., pure-blood, half-blood, muggle-born)\",\"type\":\"string\"},\"dateOfBirth\":{\"description\":\"Date of birth of the character\",\"type\":\"string\"},\"eyeColour\":{\"description\":\"Eye color of the character\",\"type\":\"string\"},\"hairColour\":{\"description\":\"Hair color of the character\",\"type\":\"string\"},\"hogwartsStaff\":{\"description\":\"Whether the character is a Hogwarts staff member\",\"type\":\"boolean\"},\"hogwartsStudent\":{\"description\":\"Whether the character is a Hogwarts student\",\"type\":\"boolean\"},\"house\":{\"description\":\"Hogwarts house the character belongs to\",\"enum\":[\"Gryffindor\",\"Slytherin\",\"Ravenclaw\",\"Hufflepuff\",\"\"],\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the character\",\"format\":\"uuid\",\"type\":\"string\"},\"image\":{\"description\":\"URL to an image of the character\",\"format\":\"uri\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the character\",\"type\":\"string\"},\"patronus\":{\"description\":\"The character's Patronus form\",\"type\":\"string\"},\"wand\":{\"description\":\"Information about the character's wand\",\"properties\":{\"core\":{\"description\":\"Core material of the wand\",\"type\":\"string\"},\"length\":{\"description\":\"Length of the wand in inches\",\"type\":\"number\"},\"wood\":{\"description\":\"Type of wood the wand is made from\",\"type\":\"string\"}},\"type\":\"object\"},\"wizard\":{\"description\":\"Whether the character is a wizard or witch\",\"type\":\"boolean\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Successful response with characters from the specified house\"},\"404\":{\"description\":\"House not found\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/characters/house/{house}","segments":[{"lit":"api"},{"lit":"characters"},{"lit":"house"},{"var":"house"}],"select":{"exist":["house"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"example":"9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8","kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /api/character/{id}","json":"{\"operationId\":\"getCharacterById\",\"parameters\":[{\"description\":\"Unique identifier of the character\",\"example\":\"9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"format\":\"uuid\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"A character from the Harry Potter universe\",\"properties\":{\"actor\":{\"description\":\"Name of the actor who portrayed the character\",\"type\":\"string\"},\"alive\":{\"description\":\"Whether the character is alive\",\"type\":\"boolean\"},\"ancestry\":{\"description\":\"Ancestry of the character (e.g., pure-blood, half-blood, muggle-born)\",\"type\":\"string\"},\"dateOfBirth\":{\"description\":\"Date of birth of the character\",\"type\":\"string\"},\"eyeColour\":{\"description\":\"Eye color of the character\",\"type\":\"string\"},\"hairColour\":{\"description\":\"Hair color of the character\",\"type\":\"string\"},\"hogwartsStaff\":{\"description\":\"Whether the character is a Hogwarts staff member\",\"type\":\"boolean\"},\"hogwartsStudent\":{\"description\":\"Whether the character is a Hogwarts student\",\"type\":\"boolean\"},\"house\":{\"description\":\"Hogwarts house the character belongs to\",\"enum\":[\"Gryffindor\",\"Slytherin\",\"Ravenclaw\",\"Hufflepuff\",\"\"],\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the character\",\"format\":\"uuid\",\"type\":\"string\"},\"image\":{\"description\":\"URL to an image of the character\",\"format\":\"uri\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the character\",\"type\":\"string\"},\"patronus\":{\"description\":\"The character's Patronus form\",\"type\":\"string\"},\"wand\":{\"description\":\"Information about the character's wand\",\"properties\":{\"core\":{\"description\":\"Core material of the wand\",\"type\":\"string\"},\"length\":{\"description\":\"Length of the wand in inches\",\"type\":\"number\"},\"wood\":{\"description\":\"Type of wood the wand is made from\",\"type\":\"string\"}},\"type\":\"object\"},\"wizard\":{\"description\":\"Whether the character is a wizard or witch\",\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Successful response with character details\"},\"404\":{\"description\":\"Character not found\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/character/{id}","segments":[{"lit":"api"},{"lit":"character"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.wand`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["house"]]},"key$":"character","name__orig":"character","Name":"Character","name_":"character","name-":"character","NAME":"CHARACTER","index$":0}, {"active":true,"entity":"character","key$":"BasicCharacterFlow","kind":"basic","name":"BasicCharacterFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"character_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"character_ref01","srcdatavar":"character_ref01_data","suffix":"_dt0"},"match":{"id":"character01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-character_ref01"}}],"index$":1}]}, 'Character')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let character_ref01_data = Object.values(setup.data.existing.character)[0] as any

    // LIST
    const character_ref01_ent = client.Character()
    const character_ref01_match: any = {}

    const character_ref01_list = (await character_ref01_ent.list(character_ref01_match)).map((e: any) => e.data())


    // LOAD
    const character_ref01_match_dt0: any = {}
    character_ref01_match_dt0.id = character_ref01_data.id
    const character_ref01_data_dt0 = (await character_ref01_ent.load(character_ref01_match_dt0)).data()
    assert(character_ref01_data_dt0.id === character_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/character/CharacterTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = HarryPotterSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['character01','character02','character03','house01','house02','house03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HARRY_POTTER_TEST_CHARACTER_ENTID': idmap,
    'HARRY_POTTER_TEST_LIVE': 'FALSE',
    'HARRY_POTTER_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['HARRY_POTTER_TEST_CHARACTER_ENTID']

  const live = 'TRUE' === env.HARRY_POTTER_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HARRY_POTTER_TEST_CHARACTER_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new HarryPotterSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
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
  }

  return setup
}
  
