import { useTransactions } from './useTransactions'
import { Skeleton } from 'components/skeleton'
import {
  TransactionsContainerCardContent,
  TransactionsContainerSkeleton,
} from './TransactionsContainer.styles'
import { Card } from 'components/card'
import { Transaction } from 'components/transaction'

export const TransactionsContainer = () => {
  const { data, isLoading, isFetched } = useTransactions()

  return (
    <>
      <Card>
        <h4>List of transactions</h4>

        {isLoading &&
          [1, 2, 3, 4, 5, 6].map((_, i) => (
            <TransactionsContainerSkeleton key={i}>
              <Skeleton />
            </TransactionsContainerSkeleton>
          ))}

        <TransactionsContainerCardContent>
          {isFetched && !data?.transactions?.length && (
            <h2>No transactions found</h2>
          )}

          {!isLoading &&
            data?.transactions?.map((transaction) => (
              <Transaction key={transaction.id} {...transaction} />
            ))}
        </TransactionsContainerCardContent>
      </Card>
    </>
  )
}
