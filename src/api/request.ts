import { BASE_API_URL } from './constants'

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

type RequestProps = { url: string; method: HttpMethod }

/**
 * @param url Remember to start the path with `/`
 */
export const request = async ({ url, method }: RequestProps) => {
  const response = await fetch(`${BASE_API_URL}${url}`, { method })

  return response.json()
}
