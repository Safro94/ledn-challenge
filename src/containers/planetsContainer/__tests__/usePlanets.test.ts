import { renderHook, waitFor } from '@testing-library/react'
import { usePlanets } from '../usePlanets'
import { AllTheProviders } from 'utils/testUtils'
import planets from 'mockData/planets'

describe('usePlanets', () => {
  it('should return the planets', async () => {
    const { result } = renderHook(() => usePlanets(), {
      wrapper: AllTheProviders,
    })

    await waitFor(() => expect(result.current.isLoading).toBe(true))

    await waitFor(() =>
      expect(result.current.data).toBe({
        planets,
      })
    )
  })
})
