import { renderHook, waitFor } from '@testing-library/react'
import { useUsers } from '../useUsers'
import { AllTheProviders } from 'utils/testUtils'
import users from 'mockData/users'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: '1',
  }),
}))

describe('useUsers', () => {
  it('should return the users filtered by the planet id', async () => {
    const { result } = renderHook(() => useUsers(), {
      wrapper: AllTheProviders,
    })

    await waitFor(() => expect(result.current.isLoading).toBe(true))

    await waitFor(() =>
      expect(result.current.data).toEqual({
        users: users.filter((user) => user.homeworld === '1'),
      })
    )
  })
})
