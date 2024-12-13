import { useTransactions } from './useTransactions'
import { Skeleton } from 'components/skeleton'
import {
  TransactionsContainerCardContent,
  TransactionsContainerSkeleton,
  TransactionsContainerTitleContainer,
} from './TransactionsContainer.styles'
import { Card } from 'components/card'
import { Transaction } from 'components/transaction'
import { Dropdown } from 'components/dropdown'
import { ExchangeRateType } from 'containers/exchangeRateContainer'
import { useMemo, useState } from 'react'

export const TransactionsContainer = () => {
  const { data, isLoading, isFetched } = useTransactions()
  const [selectedCurrency, setSelectedCurrency] = useState<
    ExchangeRateType | undefined
  >(undefined)

  const handleCurrencyChange = (currency: ExchangeRateType | undefined) => {
    setSelectedCurrency(currency)
  }

  const filteredTransactions = useMemo(() => {
    if (!selectedCurrency) return data?.transactions

    return data?.transactions?.filter((transaction) => {
      return transaction.currency === selectedCurrency
    })
  }, [data?.transactions, selectedCurrency])

  return (
    <>
      <Card>
        <TransactionsContainerTitleContainer>
          <h4>List of transactions</h4>

          <Dropdown<ExchangeRateType | undefined>
            onClick={(item) => handleCurrencyChange(item)}
            buttonLabel={selectedCurrency ?? 'Select currency'}
            items={[
              { id: undefined, text: 'ALL' },
              ...Object.values(ExchangeRateType).map((value) => ({
                id: value,
                text: value,
              })),
            ]}
          />
        </TransactionsContainerTitleContainer>

        {isLoading &&
          [1, 2, 3, 4, 5, 6].map((_, i) => (
            <TransactionsContainerSkeleton key={i}>
              <Skeleton />
            </TransactionsContainerSkeleton>
          ))}

        <TransactionsContainerCardContent>
          {isFetched && !filteredTransactions?.length && (
            <h2>No transactions found</h2>
          )}

          {!isLoading &&
            filteredTransactions?.map((transaction) => (
              <Transaction key={transaction.id} {...transaction} />
            ))}
        </TransactionsContainerCardContent>
      </Card>
    </>
  )
}
