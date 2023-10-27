export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

const BASE_API_URL = 'https://api.github.com/'

type RequestProps = { url: string; method: HttpMethod }

export const request = async ({ url, method }: RequestProps) => {
  const response = await fetch(`${BASE_API_URL}${url}`, { method })

  return response.json()
}
