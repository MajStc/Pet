export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

const BASE_API_URL = 'https://api.github.com/'

type RequestProps = { url: string; method: HttpMethod }

export const request = ({ url, method }: RequestProps) => {
  return fetch(`${BASE_API_URL}${url}`, { method })
    .then(res => res.json())
    .catch(err => err)
}
