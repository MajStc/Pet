import perf from '@react-native-firebase/perf'

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

const BASE_API_URL = 'https://api.github.com/'

type RequestProps = { url: string; method: HttpMethod }

export const request = async ({ url, method }: RequestProps) => {
  // Define the network metric
  const metric = await perf().newHttpMetric(url, method)

  // Define meta details
  // metric.putAttribute('user', 'abcd')

  // Start the metric
  await metric.start()

  const response = await fetch(`${BASE_API_URL}${url}`, { method })
  metric.setHttpResponseCode(response.status)
  metric.setResponseContentType(response.headers.get('Content-Type'))
  metric.setResponsePayloadSize(Number(response.headers.get('Content-Length')))

  // Stop the metric
  await metric.stop()

  return response.json()
}
