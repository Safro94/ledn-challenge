import { useQuery } from 'hooks/useQuery'
import { transactionsKeys } from './TransactionsContainer.keys'
import { API_PREFIX, fetcher } from 'utils'
import { API_ENDPOINTS } from 'utils/constants'
import { Transaction } from 'server'

interface TransactionsResponse {
  transactions: Transaction[]
}

const getTransactionsByUsers = async (ids: string[]) => {
  const response = await fetcher<TransactionsResponse>({
    method: 'GET',
    url: `${API_PREFIX}${API_ENDPOINTS.transactionsByUsers}/${JSON.stringify(
      ids
    )}`,
  })

  return response.data
}

export const useTransactions = (userIds: string[]) => {
  return useQuery<TransactionsResponse>({
    queryKey: transactionsKeys.byUsers(userIds),
    queryFn: () => getTransactionsByUsers(userIds),
    enabled: !!userIds?.length,
  })
}
