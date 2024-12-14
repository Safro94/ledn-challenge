import { useParams } from 'react-router-dom'
import { getUsers, UsersResponse } from './transactionsContainer.utils'
import { useQuery } from 'hooks/useQuery'
import { usersKeys } from './TransactionsContainer.keys'

export const useUsers = () => {
  const params = useParams<{ id: string }>()
  const planetId = params?.id || ''

  return useQuery<UsersResponse>({
    queryKey: usersKeys.byPlanet(planetId),
    queryFn: () => getUsers(planetId),
    enabled: !!planetId,
  })
}
