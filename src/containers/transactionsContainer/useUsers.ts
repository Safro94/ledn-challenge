import { useParams } from 'react-router-dom'
import { useQuery } from 'hooks/useQuery'
import { usersKeys } from './TransactionsContainer.keys'
import { API_PREFIX, fetcher } from 'utils'
import { User } from 'server'
import { API_ENDPOINTS } from 'utils/constants'

interface UsersResponse {
  users: User[]
}

const getUsers = async (id: string) => {
  const response = await fetcher<UsersResponse>({
    method: 'GET',
    url: `${API_PREFIX}${API_ENDPOINTS.usersByPlanet}/${id}`,
  })

  return response.data
}

export const useUsers = () => {
  const params = useParams<{ id: string }>()
  const planetId = params?.id || ''

  return useQuery<UsersResponse>({
    queryKey: usersKeys.byPlanet(planetId),
    queryFn: () => getUsers(planetId),
    enabled: !!planetId,
  })
}
