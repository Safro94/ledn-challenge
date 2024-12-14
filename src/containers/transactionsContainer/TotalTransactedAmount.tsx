import { ExchangeRateType } from 'containers/exchangeRateContainer'
import { FC, Fragment } from 'react'
import { useTranslation } from 'react-i18next'
import { Transaction } from 'server'
import {
  TotalTransactedAmountCard,
  TransactionsContainerTotaContainer,
  TransactionsContainerTotalAmount,
  TransactionsContainerTotalAmountCurrency,
} from './TransactionsContainer.styles'
import { useExchangeRateStore } from 'containers/exchangeRateContainer/exchangeRateStore'
import { convertToGCS, convertToICS } from 'utils/converter'
import { Skeleton } from 'components/skeleton'

interface Props {
  isLoading: boolean
  transactions: Transaction[]
}

export const TotalTransactedAmount: FC<Props> = ({
  transactions,
  isLoading,
}) => {
  const { t } = useTranslation()
  const exchangeRate = useExchangeRateStore((state) => state.rate)

  if (isLoading)
    return (
      <TotalTransactedAmountCard>
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </TotalTransactedAmountCard>
    )

  const getTotalAmountTransacted = () => {
    return transactions.reduce<Record<ExchangeRateType, number>>(
      (acc, transaction) => {
        acc[transaction.currency as ExchangeRateType] += transaction.amount

        return acc
      },
      {
        [ExchangeRateType.ICS]: 0,
        [ExchangeRateType.GCS]: 0,
      }
    )
  }

  const getConvertedAmount = (amount: number, currency: ExchangeRateType) => {
    if (!exchangeRate) return '-'

    switch (currency) {
      case ExchangeRateType.ICS:
        return (
          <>
            <span>{convertToGCS(amount, exchangeRate)}</span>

            <TransactionsContainerTotalAmountCurrency>
              {ExchangeRateType.GCS}
            </TransactionsContainerTotalAmountCurrency>
          </>
        )
      case ExchangeRateType.GCS:
        return (
          <>
            <span>{convertToICS(amount, exchangeRate)}</span>

            <TransactionsContainerTotalAmountCurrency>
              {ExchangeRateType.ICS}
            </TransactionsContainerTotalAmountCurrency>
          </>
        )

      default:
        return null
    }
  }

  const totalByCurrency = getTotalAmountTransacted()
  const totalInICS = exchangeRate
    ? totalByCurrency[ExchangeRateType.ICS] +
      Number(convertToICS(totalByCurrency[ExchangeRateType.GCS], exchangeRate))
    : 0

  const totalInGCS = exchangeRate
    ? totalByCurrency[ExchangeRateType.GCS] +
      Number(convertToGCS(totalByCurrency[ExchangeRateType.ICS], exchangeRate))
    : 0

  return (
    <TotalTransactedAmountCard>
      <h5>{t('detail.totalAmountTransacted')}</h5>

      <>
        {Object.entries(totalByCurrency).map(([currency, amount]) => {
          return (
            <Fragment key={currency}>
              <h6>
                {t('detail.total')} {currency}
              </h6>

              <TransactionsContainerTotalAmount>
                {amount.toFixed(2)}
                <TransactionsContainerTotalAmountCurrency>
                  {currency}
                </TransactionsContainerTotalAmountCurrency>
                ≈{getConvertedAmount(amount, currency as ExchangeRateType)}
              </TransactionsContainerTotalAmount>
            </Fragment>
          )
        })}
      </>

      <>
        <h2>{t('detail.total')}</h2>

        <TransactionsContainerTotaContainer>
          <TransactionsContainerTotalAmount>
            {totalInICS.toFixed(2)}

            <TransactionsContainerTotalAmountCurrency>
              {ExchangeRateType.ICS}
            </TransactionsContainerTotalAmountCurrency>
          </TransactionsContainerTotalAmount>
          =
          <TransactionsContainerTotalAmount>
            {totalInGCS.toFixed(2)}

            <TransactionsContainerTotalAmountCurrency>
              {ExchangeRateType.GCS}
            </TransactionsContainerTotalAmountCurrency>
          </TransactionsContainerTotalAmount>
        </TransactionsContainerTotaContainer>
      </>
    </TotalTransactedAmountCard>
  )
}
