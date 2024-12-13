import { Card } from 'components/card'
import { useExchangeRate } from './useExchangeRate'
import { ExchangeRateCard } from './ExchangeRateContainer.styles'
import { Skeleton } from 'components/skeleton'

export enum ExchangeRateType {
  ICS = 'ICS',
  GCS = 'GCS',
}

export const ExchangeRateContainer = () => {
  const { data, isLoading } = useExchangeRate()

  return (
    <ExchangeRateCard>
      {isLoading && <Skeleton />}

      {!isLoading && (
        <>
          <Card.Title>Exchange rate</Card.Title>
          <Card.Subtitle>
            1 {ExchangeRateType.ICS} = {data?.rate} {ExchangeRateType.GCS}
          </Card.Subtitle>
        </>
      )}
    </ExchangeRateCard>
  )
}
