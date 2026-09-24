
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { HarryPotterSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = HarryPotterSDK.test()
    equal(testsdk instanceof HarryPotterSDK, true,
      'HarryPotterSDK.test() must return a client synchronously')
  })

})
