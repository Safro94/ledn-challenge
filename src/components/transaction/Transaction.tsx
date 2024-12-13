import { FC } from 'react'
import { Transaction as TransactionType } from 'server'
import {
  TransactionContainer,
  TransactionStatus,
  TransactionStatusType,
} from './Transaction.styles'

export const Transaction: FC<TransactionType> = ({
  amount,
  currency,
  status,
  date,
}) => {
  return (
    <TransactionContainer>
      <span>{new Date(date).toLocaleDateString()}</span>

      {/* casting the value of status because I cannot change the types on the server based on the challenge's description */}
      <TransactionStatus variant={status as TransactionStatusType}>
        {status}
      </TransactionStatus>

      <span>{currency}</span>

      <span>{amount}</span>
    </TransactionContainer>
  )
}
