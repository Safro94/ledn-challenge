import { useTransactions } from './useTransactions'
import { TransactionsContainerWrapper } from './TransactionsContainer.styles'
import { useMemo } from 'react'
import { TotalTransactedAmount } from './TotalTransactedAmount'
import { useUsers } from './useUsers'
import { TransactionsCard } from './TransactionsCard'

export const TransactionsContainer = () => {
  const {
    data: usersData,
    isLoading: isLoadingUsers,
    isFetched: isUsersFetched,
  } = useUsers()

  const userIds = useMemo(
    () => usersData?.users.map((user) => user.id) || [],
    [usersData]
  )

  const {
    data,
    isLoading: isLoadingTransactions,
    isFetched: isTransactionsFetched,
    isPending: isPendingTransactions,
    fetchStatus,
  } = useTransactions(userIds)

  const isLoading = isLoadingTransactions || isLoadingUsers

  return (
    <TransactionsContainerWrapper>
      <TotalTransactedAmount
        transactions={data?.transactions || []}
        isLoading={isLoading}
      />

      <TransactionsCard
        isLoading={isLoading}
        isFetched={isTransactionsFetched}
        transactions={data?.transactions || []}
        showEmptyState={
          isUsersFetched && isPendingTransactions && fetchStatus === 'idle'
        }
      />
    </TransactionsContainerWrapper>
  )
}
