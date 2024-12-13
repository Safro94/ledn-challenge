import { Transaction } from 'server'
import { useQuery } from 'hooks/useQuery'
import { useParams } from 'react-router-dom'
import { transactionsKeys, usersKeys } from './TransactionsContainer.keys'
import { useMemo } from 'react'
import {
  getTransactionsByUsers,
  getUsers,
  TransactionsResponse,
  UsersResponse,
} from './transactionsContainer.utils'

export const useTransactions = () => {
  const params = useParams<{ id: string }>()
  const planetId = params?.id || ''

  const { data: usersData, isFetched } = useQuery<UsersResponse>({
    queryKey: usersKeys.byPlanet(planetId),
    queryFn: () => getUsers(planetId),
    enabled: !!planetId,
  })

  const userIds = useMemo(
    () => usersData?.users.map((user) => user.id) || [],
    [usersData]
  )

  return useQuery<TransactionsResponse>({
    queryKey: transactionsKeys.byUsers(userIds),
    queryFn: () => getTransactionsByUsers(userIds),
    enabled: isFetched && !!userIds?.length,
  })
}
