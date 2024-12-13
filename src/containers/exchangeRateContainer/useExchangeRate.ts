import { useQuery } from 'hooks/useQuery'
import { exchangeRateKeys } from './ExchangeRateContainer.keys'
import { API_PREFIX, fetcher } from 'utils'

interface Response {
  rate: number
}

const getRate = async () => {
  const response = await fetcher<Response>({
    method: 'GET',
    url: `${API_PREFIX}/exchange-rate`,
  })

  return response.data
}

export const useExchangeRate = () => {
  return useQuery<Response>({
    queryKey: exchangeRateKeys.rate,
    refetchInterval: 1000,
    queryFn: getRate,
  })
}
