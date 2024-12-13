import { useQuery } from 'hooks/useQuery'
import { Planet } from 'server'
import { API_PREFIX, fetcher } from 'utils'
import { planetsKeys } from './PlanetsContainer.keys'

const getPlanets = async () => {
  const response = await fetcher<{ planets: Planet[] }>({
    method: 'GET',
    url: `${API_PREFIX}/planets`,
  })

  return response.data
}

export const usePlanets = () => {
  return useQuery<{ planets: Planet[] }>({
    queryKey: planetsKeys.all,
    queryFn: getPlanets,
  })
}
