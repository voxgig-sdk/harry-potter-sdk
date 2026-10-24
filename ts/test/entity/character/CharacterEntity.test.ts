

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { HarryPotterSDK, BaseFeature, config, stdutil } from '../../..'

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


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('character hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of HarryPotterSDK.test(offline).Character().stream('list')) { }
    }, /offline/)

    for await (const _item of HarryPotterSDK.test(offline).Character()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = HarryPotterSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.Character().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of HarryPotterSDK.test().Character().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new HarryPotterSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.Character().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.Character().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = HarryPotterSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Character().list({"actor":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.HARRY_POTTER_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'character.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"actor":{"a":true,"h":"Actor","n":"actor","r":false,"sh":"Name of the actor who portrayed the character","t":"`$STRING`","key$":"actor","index$":0},"alive":{"a":true,"h":"Alive","n":"alive","r":false,"sh":"Whether the character is alive","t":"`$BOOLEAN`","key$":"alive","index$":1},"ancestry":{"a":true,"h":"Ancestry","n":"ancestry","r":false,"sh":"Ancestry of the character (e.g., pure-blood, half-blood, muggle-born)","t":"`$STRING`","key$":"ancestry","index$":2},"dateOfBirth":{"a":true,"h":"Date Of Birth","n":"dateOfBirth","r":false,"sh":"Date of birth of the character","t":"`$STRING`","key$":"dateOfBirth","index$":3},"eyeColour":{"a":true,"h":"Eye Colour","n":"eyeColour","r":false,"sh":"Eye color of the character","t":"`$STRING`","key$":"eyeColour","index$":4},"hairColour":{"a":true,"h":"Hair Colour","n":"hairColour","r":false,"sh":"Hair color of the character","t":"`$STRING`","key$":"hairColour","index$":5},"hogwartsStaff":{"a":true,"h":"Hogwarts Staff","n":"hogwartsStaff","r":false,"sh":"Whether the character is a Hogwarts staff member","t":"`$BOOLEAN`","key$":"hogwartsStaff","index$":6},"hogwartsStudent":{"a":true,"h":"Hogwarts Student","n":"hogwartsStudent","r":false,"sh":"Whether the character is a Hogwarts student","t":"`$BOOLEAN`","key$":"hogwartsStudent","index$":7},"house":{"a":true,"h":"House","n":"house","r":false,"sh":"Hogwarts house the character belongs to","t":"`$STRING`","key$":"house","index$":8},"id":{"a":true,"fo":"uuid","h":"Id","n":"id","r":false,"sh":"Unique identifier for the character","t":"`$STRING`","key$":"id","index$":9},"image":{"a":true,"fo":"uri","h":"Image","n":"image","r":false,"sh":"URL to an image of the character","t":"`$STRING`","key$":"image","index$":10},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"Name of the character","t":"`$STRING`","key$":"name","index$":11},"patronus":{"a":true,"h":"Patronus","n":"patronus","r":false,"sh":"The character's Patronus form","t":"`$STRING`","key$":"patronus","index$":12},"wand":{"a":true,"h":"Wand","n":"wand","r":false,"sh":"Information about the character's wand","t":"`$OBJECT`","key$":"wand","index$":13},"wizard":{"a":true,"h":"Wizard","n":"wizard","r":false,"sh":"Whether the character is a wizard or witch","t":"`$BOOLEAN`","key$":"wizard","index$":14}},"id":{"field":"id","name":"id"},"name":"character","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/characters","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/api/characters","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"characters"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /api/characters/staff","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/api/characters/staff","q":{"$action":"staff"},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"characters"},{"lit":"staff"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"GET /api/characters/students","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/api/characters/students","q":{"$action":"student"},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"characters"},{"lit":"students"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/characters/house/{house}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"gryffindor","k":"param","n":"house","or":"house","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/characters/house/{house}","q":{"exist":["house"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"characters"},{"lit":"house"},{"var":"house"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /api/character/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/character/{id}","q":{"exist":["id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"character"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"character","name__orig":"character","Name":"Character","name_":"character","name-":"character","NAME":"CHARACTER","index$":0}, {"active":true,"entity":"character","key$":"BasicCharacterFlow","kind":"basic","name":"BasicCharacterFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"character_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"character_ref01","srcdatavar":"character_ref01_data","suffix":"_dt0"},"m":{"id":"character01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-character_ref01"}}],"index$":1}]}, 'Character', {"GET /api/characters":{"protocol":"http","parameters":[]},"GET /api/characters/staff":{"protocol":"http","parameters":[]},"GET /api/characters/students":{"protocol":"http","parameters":[]},"GET /api/characters/house/{house}":{"protocol":"http","parameters":[{"name":"house","in":"path","required":true,"description":"Name of the Hogwarts house","schema":{"type":"string","enum":["gryffindor","slytherin","ravenclaw","hufflepuff"]},"example":"gryffindor","index$":0}]},"GET /api/character/{id}":{"protocol":"http","parameters":[{"name":"id","in":"path","required":true,"description":"Unique identifier of the character","schema":{"type":"string","format":"uuid"},"example":"9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8","index$":0}]}}, { strict: LIVE_STRICT, t })
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



// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true

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
    ['character01','character02','character03'],
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
  
