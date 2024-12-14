import { FC } from 'react'
import { Transaction as TransactionType } from 'server'
import {
  TransactionAmountContainer,
  TransactionContainer,
  TransactionCurrency,
  TransactionStatus,
  TransactionStatusType,
} from './Transaction.styles'
import { ExchangeRateType } from 'containers'
import { useExchangeRateStore } from 'containers/exchangeRateContainer/exchangeRateStore'
import { convertToGCS, convertToICS } from 'utils/converter'

export const Transaction: FC<TransactionType> = ({
  amount,
  currency,
  status,
  date,
}) => {
  const exchangeRate = useExchangeRateStore((state) => state.rate)

  const getExchangeAmount = (amount: number, currency: ExchangeRateType) => {
    if (!exchangeRate) return '-'

    switch (currency) {
      case ExchangeRateType.ICS:
        return (
          <>
            <TransactionCurrency>{ExchangeRateType.GCS}</TransactionCurrency>
            <span>{convertToGCS(amount, exchangeRate)}</span>
          </>
        )
      case ExchangeRateType.GCS:
        return (
          <>
            <TransactionCurrency>{ExchangeRateType.ICS}</TransactionCurrency>
            <span>{convertToICS(amount, exchangeRate)}</span>
          </>
        )

      default:
        return null
    }
  }

  return (
    <TransactionContainer>
      <span>{new Date(date).toLocaleDateString()}</span>

      {/* casting the value of status and currency below because I cannot change the types on the server based on the challenge's description */}
      <TransactionStatus variant={status as TransactionStatusType}>
        {status}
      </TransactionStatus>

      <TransactionAmountContainer>
        <TransactionCurrency>{currency}</TransactionCurrency>
        <span>{amount.toFixed(2)}</span>
      </TransactionAmountContainer>

      <TransactionAmountContainer>
        {getExchangeAmount(amount, currency as ExchangeRateType)}
      </TransactionAmountContainer>
    </TransactionContainer>
  )
}
