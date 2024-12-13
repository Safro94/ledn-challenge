import { useQueryClient } from 'client'
import { useMutation } from 'hooks/useMutation'
import { API_PREFIX, fetcher } from 'utils'
import { transactionsKeys } from './TransactionsContainer.keys'
import { Transaction } from 'server'

const blockTransactions = async (transactions: Transaction[]) => {
  return await fetcher<Transaction[]>({
    method: 'PUT',
    url: `${API_PREFIX}/${transactionsKeys.all}/update-batch`,
    data: {
      transactions: JSON.stringify(transactions),
    },
  })
}

export const useBlockTransactionsMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: transactionsKeys.updateBatch(),
    mutationFn: blockTransactions,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: transactionsKeys.all,
      })
    },
  })
}
