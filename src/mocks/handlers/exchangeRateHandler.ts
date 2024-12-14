import { rest } from 'msw'
import { API_PREFIX } from 'utils'
import { API_ENDPOINTS } from 'utils/constants'

export const EXCHANGE_RATE_TEST_VALUE = 1.2

export const exchangeRateHandler = [
  rest.get(
    `${process.env.REACT_APP_API_URL}${API_PREFIX}${API_ENDPOINTS.exchangeRate}`,
    (_req, res, ctx) => {
      return res(
        ctx.json({
          rate: EXCHANGE_RATE_TEST_VALUE,
        })
      )
    }
  ),
]
