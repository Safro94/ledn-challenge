import transactions from 'mockData/transactions'
import users from 'mockData/users'
import { rest } from 'msw'
import { API_PREFIX } from 'utils'
import { API_ENDPOINTS } from 'utils/constants'
import { TEST_PLANET_ID } from './usersHandler'

const TEST_USER_IDS = users.filter((user) => user.homeworld === TEST_PLANET_ID)

export const transactionsHandler = [
  rest.get(
    `${process.env.REACT_APP_API_URL}${API_PREFIX}${
      API_ENDPOINTS.transactionsByUsers
    }/${JSON.stringify(TEST_USER_IDS)}`,
    (_req, res, ctx) => {
      return res(
        ctx.json({
          transactions,
        })
      )
    }
  ),
]
