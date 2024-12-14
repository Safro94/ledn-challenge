import { renderHook, waitFor } from '@testing-library/react'
import { useExchangeRate } from '../useExchangeRate'
import { AllTheProviders } from 'utils/testUtils'
import { EXCHANGE_RATE_TEST_VALUE } from 'mocks/handlers/exchangeRateHandler'

const mockSetter = jest.fn()
jest.mock('../exchangeRateStore', () => ({
  useExchangeRateStore: () => mockSetter,
}))

describe('useExchangeRate', () => {
  it('should return the rate and call the state manager setter', async () => {
    const { result } = renderHook(() => useExchangeRate(), {
      wrapper: AllTheProviders,
    })

    await waitFor(() => expect(result.current.isLoading).toBe(true))

    await waitFor(() =>
      expect(result.current.data).toEqual({
        rate: EXCHANGE_RATE_TEST_VALUE,
      })
    )

    expect(mockSetter).toHaveBeenCalledWith(EXCHANGE_RATE_TEST_VALUE)
    expect(mockSetter).toHaveBeenCalledTimes(1)
  })
})
