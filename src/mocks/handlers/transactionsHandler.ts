import transactions from 'mockData/transactions'
import { rest } from 'msw'
import { API_PREFIX } from 'utils'
import { API_ENDPOINTS } from 'utils/constants'

export const transactionsHandler = [
  rest.get(
    `${process.env.REACT_APP_API_URL}${API_PREFIX}${
      API_ENDPOINTS.transactionsByUsers
    }/${JSON.stringify(['1', '2', '3'])}`,
    (_req, res, ctx) => {
      return res(
        ctx.json({
          transactions,
        })
      )
    }
  ),
]
