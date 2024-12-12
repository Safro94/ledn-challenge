import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { axios } from './axios'
import { ExchangeRate, Planet, Transaction, User } from '../server'

type Response = ExchangeRate | Planet | Transaction | User

/**
 * Axios wrapper function to make requests to the API.
 * This wrapper is useful in case we decide to change axios to another library in the future.
 * @param config - Axios request configuration
 * @returns Axios response
 * @throws Error if the request fails
 */
export const fetcher = async (
  config: AxiosRequestConfig
): Promise<AxiosResponse<Response>> => {
  try {
    const res: AxiosResponse<Response> = await axios({
      ...config,
    })
    return res
  } catch (error) {
    throw error
  }
}
