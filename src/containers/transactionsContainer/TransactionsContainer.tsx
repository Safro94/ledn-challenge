import { useTransactions } from './useTransactions'
import { Skeleton } from 'components/skeleton'
import {
  TransactionsContainerCardContent,
  TransactionsContainerFilterContainer,
  TransactionsContainerSkeleton,
  TransactionsContainerTitleContainer,
  TransactionsContainerWrapper,
} from './TransactionsContainer.styles'
import { Card } from 'components/card'
import { Transaction } from 'components/transaction'
import { Dropdown } from 'components/dropdown'
import { ExchangeRateType } from 'containers/exchangeRateContainer'
import { useMemo, useState } from 'react'
import { Button, ButtonTypes } from 'components/button'
import { useBlockTransactionsMutation } from './useBlockTransactionsMutation'
import { useTranslation } from 'react-i18next'
import { TotalTransactedAmount } from './TotalTransactedAmount'
import { useUsers } from './useUsers'
import { EmptyState } from 'components/emptyState'

export const TransactionsContainer = () => {
  const { t } = useTranslation()
  const { mutate: blockTransactions } = useBlockTransactionsMutation()
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

  const isLoading = isLoadingTransactions || isLoadingUsers

  return (
    <TransactionsContainerWrapper>
      <TotalTransactedAmount
        transactions={data?.transactions || []}
        isLoading={isLoading}
      />

      <Card>
        <TransactionsContainerTitleContainer>
          <h4>{t('detail.listOfTransactions')}</h4>

          <TransactionsContainerFilterContainer>
            <Button
              variant={ButtonTypes.SECONDARY}
              onClick={() => {
                if (!data?.transactions) return

                blockTransactions(
                  data?.transactions.filter(
                    (transaction) => transaction.status === 'inProgress'
                  )
                )
              }}
            >
              {t('detail.blockInProgress')}
            </Button>

            <Dropdown<ExchangeRateType | undefined>
              onClick={(item) => handleCurrencyChange(item)}
              buttonLabel={selectedCurrency ?? t('detail.selectCurrency')}
              items={[
                { id: undefined, text: 'ALL' },
                ...Object.values(ExchangeRateType).map((value) => ({
                  id: value,
                  text: value,
                })),
              ]}
            />
          </TransactionsContainerFilterContainer>
        </TransactionsContainerTitleContainer>

        {isLoading &&
          [1, 2, 3, 4, 5, 6].map((_, i) => (
            <TransactionsContainerSkeleton key={i}>
              <Skeleton />
            </TransactionsContainerSkeleton>
          ))}

        <TransactionsContainerCardContent>
          {(isTransactionsFetched && !filteredTransactions?.length) ||
            (isUsersFetched &&
              isPendingTransactions &&
              fetchStatus === 'idle' && (
                <EmptyState message={t('detail.noTransactionsFound')} />
              ))}

          {isTransactionsFetched &&
            !!filteredTransactions?.length &&
            filteredTransactions.map((transaction) => (
              <Transaction key={transaction.id} {...transaction} />
            ))}
        </TransactionsContainerCardContent>
      </Card>
    </TransactionsContainerWrapper>
  )
}
