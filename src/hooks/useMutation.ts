import { AxiosError } from 'axios'
import {
  UseMutationOptions,
  useMutation as useReactQueryMutation,
} from 'client'

/*
 * This hook is a wrapper around useMutation from @tanstack/react-query
 * It hides the implementation details of the hook and allows us to use it
 * maintaining the same API as the original hook. This is useful in case
 * we want to replace RQ with another library in the future so we only have
 * to change the hook and not the rest of the code.
 * */
export const useMutation = <T, V>(
  options: UseMutationOptions<T, AxiosError<Error>, V>
) => {
  return useReactQueryMutation<T, AxiosError<Error>, V>(options)
}
