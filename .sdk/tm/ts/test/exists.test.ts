
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { HarryPotterSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await HarryPotterSDK.test()
    equal(null !== testsdk, true)
  })

})
