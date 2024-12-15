import { Card } from 'components/card'
import { FC, useMemo, useState } from 'react'
import {
  TransactionsCardContent,
  TransactionsCardFilterContainer,
  TransactionsCardSkeletonContainer,
  TransactionsCardTitleContainer,
} from './TransactionsContainer.styles'
import { Button, ButtonTypes } from 'components/button'
import { Transaction as TransactionType } from 'server'
import { useTranslation } from 'react-i18next'
import { ExchangeRateType } from 'containers/exchangeRateContainer'
import { Dropdown } from 'components/dropdown'
import { EmptyState } from 'components/emptyState'
import { Skeleton } from 'components/skeleton'
import { Transaction } from 'components/transaction'

interface Props {
  isLoading: boolean
  isFetched: boolean
  transactions: TransactionType[]
  showEmptyState?: boolean
  onBlockTransactions: (transactions: TransactionType[]) => void
}

export const TransactionsCard: FC<Props> = ({
  onBlockTransactions,
  transactions,
  isLoading,
  isFetched,
  showEmptyState,
}) => {
  const [selectedCurrency, setSelectedCurrency] = useState<
    ExchangeRateType | undefined
  >(undefined)

  const { t } = useTranslation()

  const filteredTransactions = useMemo(() => {
    if (!selectedCurrency) return transactions

    return transactions.filter((transaction) => {
      return transaction.currency === selectedCurrency
    })
  }, [transactions, selectedCurrency])

  const handleCurrencyChange = (currency: ExchangeRateType | undefined) => {
    setSelectedCurrency(currency)
  }

  return (
    <Card>
      <TransactionsCardTitleContainer>
        <h4>{t('detail.listOfTransactions')}</h4>

        <TransactionsCardFilterContainer>
          <Button
            variant={ButtonTypes.SECONDARY}
            disabled={!transactions?.length}
            onClick={() => {
              onBlockTransactions(
                transactions.filter(
                  (transaction) => transaction.status === 'inProgress'
                )
              )
            }}
          >
            {t('detail.blockInProgress')}
          </Button>

          {!!transactions?.length && (
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
          )}
        </TransactionsCardFilterContainer>
      </TransactionsCardTitleContainer>

      {isLoading &&
        [1, 2, 3, 4, 5, 6].map((_, i) => (
          <TransactionsCardSkeletonContainer key={i}>
            <Skeleton />
          </TransactionsCardSkeletonContainer>
        ))}

      <TransactionsCardContent>
        {(isFetched && !filteredTransactions?.length) ||
          (showEmptyState && (
            <EmptyState message={t('detail.noTransactionsFound')} />
          ))}

        {isFetched &&
          !!filteredTransactions?.length &&
          filteredTransactions.map((transaction) => (
            <Transaction key={transaction.id} {...transaction} />
          ))}
      </TransactionsCardContent>
    </Card>
  )
}
