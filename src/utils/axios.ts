import axios, { AxiosError, AxiosRequestConfig } from 'axios'

const opts: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_API_URL,
}

const interceptorError = (error: AxiosError) => {
  console.log(error) // log the response, ideally you would log this using Sentry or a similar tool
  return Promise.reject(error.response)
}

const instance = axios.create(opts)

instance.interceptors.response.use((response) => response, interceptorError)

export { instance as axios }
