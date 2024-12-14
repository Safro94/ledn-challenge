import { useQuery } from 'hooks/useQuery'
import { transactionsKeys } from './TransactionsContainer.keys'
import {
  getTransactionsByUsers,
  TransactionsResponse,
} from './transactionsContainer.utils'

export const useTransactions = (userIds: string[]) => {
  return useQuery<TransactionsResponse>({
    queryKey: transactionsKeys.byUsers(userIds),
    queryFn: () => getTransactionsByUsers(userIds),
    enabled: !!userIds?.length,
  })
}
