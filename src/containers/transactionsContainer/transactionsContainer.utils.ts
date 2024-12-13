import { API_PREFIX, fetcher } from 'utils'
import { Transaction, User } from 'server'

export interface UsersResponse {
  users: User[]
}

export interface TransactionsResponse {
  transactions: Transaction[]
}

const getUsers = async (id: string) => {
  const response = await fetcher<UsersResponse>({
    method: 'GET',
    url: `${API_PREFIX}/users/planet/${id}`,
  })

  return response.data
}

const getTransactionsByUsers = async (ids: string[]) => {
  const response = await fetcher<TransactionsResponse>({
    method: 'GET',
    url: `${API_PREFIX}/transactions/users/${JSON.stringify(ids)}`,
  })

  return response.data
}

export { getUsers, getTransactionsByUsers }
