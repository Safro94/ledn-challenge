import { API_PREFIX, fetcher } from 'utils'
import { Transaction, User } from 'server'
import { API_ENDPOINTS } from 'utils/constants'

export interface UsersResponse {
  users: User[]
}

export interface TransactionsResponse {
  transactions: Transaction[]
}

const getUsers = async (id: string) => {
  const response = await fetcher<UsersResponse>({
    method: 'GET',
    url: `${API_PREFIX}/${API_ENDPOINTS.usersByPlanet}/${id}`,
  })

  return response.data
}

const getTransactionsByUsers = async (ids: string[]) => {
  const response = await fetcher<TransactionsResponse>({
    method: 'GET',
    url: `${API_PREFIX}/${API_ENDPOINTS.transactionsByUsers}/${JSON.stringify(
      ids
    )}`,
  })

  return response.data
}

export { getUsers, getTransactionsByUsers }
