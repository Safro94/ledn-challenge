import { exchangeRateHandler } from './exchangeRateHandler'
import { planetsHandler } from './planetsHandler'

export const handlers = [...planetsHandler, ...exchangeRateHandler]
