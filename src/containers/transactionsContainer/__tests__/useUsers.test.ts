import { renderHook, waitFor } from '@testing-library/react'
import { useUsers } from '../useUsers'
import { AllTheProviders } from 'utils/testUtils'
import users from 'mockData/users'
import Router from 'react-router-dom'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}))

describe('useUsers', () => {
  it('should return the users filtered by the planet id', async () => {
    jest.spyOn(Router, 'useParams').mockReturnValue({ id: '1' })

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

  it('should not call the query if the planet id is not provided', async () => {
    jest.spyOn(Router, 'useParams').mockReturnValue({})

    const { result } = renderHook(() => useUsers(), {
      wrapper: AllTheProviders,
    })

    await waitFor(() => expect(result.current.isLoading).toBe(false))
    expect(result.current.data).not.toBeDefined()
  })
})
