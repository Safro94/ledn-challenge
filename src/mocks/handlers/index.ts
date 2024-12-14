import { exchangeRateHandler } from './exchangeRateHandler'
import { planetsHandler } from './planetsHandler'
import { transactionsHandler } from './transactionsHandler'
import { usersHandler } from './usersHandler'

export const handlers = [
  ...planetsHandler,
  ...exchangeRateHandler,
  ...transactionsHandler,
  ...usersHandler,
]
