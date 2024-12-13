import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { axios } from './axios'

/**
 * Axios wrapper function to make requests to the API.
 * This wrapper is useful in case we decide to change axios to another library in the future.
 * @param config - Axios request configuration
 * @returns Axios response
 * @throws Error if the request fails
 */
export const fetcher = async <T>(
  config: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  try {
    const res: AxiosResponse<T> = await axios<T>({
      ...config,
      headers: {
        ...config.headers,
        'Content-Type': 'application/json',
      },
    })
    return res
  } catch (error) {
    throw error
  }
}
