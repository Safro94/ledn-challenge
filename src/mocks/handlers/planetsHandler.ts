import planets from 'mockData/planets'
import { rest } from 'msw'
import { API_PREFIX } from 'utils'
import { API_ENDPOINTS } from 'utils/constants'

export const planetsHandler = [
  rest.get(
    `${process.env.REACT_APP_API_URL}${API_PREFIX}${API_ENDPOINTS.planets}`,
    (_req, res, ctx) => {
      return res(
        ctx.json({
          planets,
        })
      )
    }
  ),
]
