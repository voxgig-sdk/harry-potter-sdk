

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


loadEnvLocal(__dirname + '/../../../.env.local')


describe('SpellEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HARRY_POTTER_TEST_LIVE=TRUE.
  afterEach(liveDelay('HARRY_POTTER_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HarryPotterSDK.test()
    const ent = testsdk.Spell()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.HARRY_POTTER_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'spell.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"Description of what the spell does","t":"`$STRING`","key$":"description","index$":0},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"Unique identifier for the spell","t":"`$STRING`","key$":"id","index$":1},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"Name of the spell","t":"`$STRING`","key$":"name","index$":2}},"id":{"field":"id","name":"id"},"name":"spell","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/spells","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/api/spells","q":{},"r":{},"s":[{"lit":"api"},{"lit":"spells"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"spell","name__orig":"spell","Name":"Spell","name_":"spell","name-":"spell","NAME":"SPELL","index$":1}, {"active":true,"entity":"spell","key$":"BasicSpellFlow","kind":"basic","name":"BasicSpellFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"spell_ref01"}}],"index$":0}]}, 'Spell', {"GET /api/spells":{"protocol":"http","operationId":"getAllSpells","responses":{"200":{"description":"Successful response with all spells","content":{"application/json":{"schema":{"type":"array","items":{"type":"object","description":"A magical spell from the Harry Potter universe","properties":{"id":{"type":"string","description":"Unique identifier for the spell","key$":"id"},"name":{"type":"string","description":"Name of the spell","key$":"name"},"description":{"type":"string","description":"Description of what the spell does","key$":"description"}},"x-ref":"#/components/schemas/Spell","index$":0}}}}}},"parameters":[],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let spell_ref01_data = Object.values(setup.data.existing.spell)[0] as any

    // LIST
    const spell_ref01_ent = client.Spell()
    const spell_ref01_match: any = {}

    const spell_ref01_list = (await spell_ref01_ent.list(spell_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/spell/SpellTestData.json')

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
    ['spell01','spell02','spell03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HARRY_POTTER_TEST_SPELL_ENTID': idmap,
    'HARRY_POTTER_TEST_LIVE': 'FALSE',
    'HARRY_POTTER_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['HARRY_POTTER_TEST_SPELL_ENTID']

  const live = 'TRUE' === env.HARRY_POTTER_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HARRY_POTTER_TEST_SPELL_ENTID']
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
  
