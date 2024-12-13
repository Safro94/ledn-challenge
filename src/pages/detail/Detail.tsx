import { ExchangeRateContainer, TransactionsContainer } from 'containers'
import { DetailContainer } from './Detail.styles'

export const Detail = () => {
  return (
    <DetailContainer>
      <TransactionsContainer />
      <ExchangeRateContainer />
    </DetailContainer>
  )
}
