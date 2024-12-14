import { useQuery } from 'hooks/useQuery'
import { exchangeRateKeys } from './ExchangeRateContainer.keys'
import { API_PREFIX, fetcher } from 'utils'
import { useExchangeRateStore } from './exchangeRateStore'
import { API_ENDPOINTS } from 'utils/constants'

interface Response {
  rate: number
}

const getRate = async () => {
  const response = await fetcher<Response>({
    method: 'GET',
    url: `${API_PREFIX}${API_ENDPOINTS.exchangeRate}`,
  })

  return response.data
}

export const useExchangeRate = () => {
  const setRate = useExchangeRateStore((state) => state.setRate)

  const { data, ...rest } = useQuery<Response>({
    queryKey: exchangeRateKeys.rate,
    refetchInterval: 1000,
    queryFn: getRate,
  })

  if (data?.rate) {
    setRate(data.rate)
  }

  return { data, ...rest }
}
