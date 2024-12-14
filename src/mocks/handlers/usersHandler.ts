import users from 'mockData/users'
import { rest } from 'msw'
import { API_PREFIX } from 'utils'
import { API_ENDPOINTS } from 'utils/constants'

export const TEST_PLANET_ID = '1'

export const usersHandler = [
  rest.get(
    `${process.env.REACT_APP_API_URL}${API_PREFIX}${API_ENDPOINTS.usersByPlanet}/${TEST_PLANET_ID}`,
    (_req, res, ctx) => {
      return res(
        ctx.json({
          users: users.filter((user) => user.homeworld === TEST_PLANET_ID),
        })
      )
    }
  ),
]
