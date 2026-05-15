
import { Context } from './Context'


class HarryPotterError extends Error {

  isHarryPotterError = true

  sdk = 'HarryPotter'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  HarryPotterError
}

