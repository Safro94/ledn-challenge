import { useQuery } from 'hooks/useQuery'
import { Planet } from 'server'
import { API_PREFIX, fetcher } from 'utils'
import { planetsKeys } from './PlanetsContainer.keys'
import { API_ENDPOINTS } from 'utils/constants'

interface Response {
  planets: Planet[]
}

const getPlanets = async () => {
  const response = await fetcher<Response>({
    method: 'GET',
    url: `${API_PREFIX}/${API_ENDPOINTS.planets}`,
  })

  return response.data
}

export const usePlanets = () => {
  return useQuery<Response>({
    queryKey: planetsKeys.all,
    queryFn: getPlanets,
  })
}
