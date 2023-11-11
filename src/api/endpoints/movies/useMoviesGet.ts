import { useQuery } from '@tanstack/react-query'

import { request } from '../../request'

export const useMoviesGet = () => {
  return useQuery({
    queryFn: () => request({ method: 'GET', url: '/movies' }),
    queryKey: ['movies'],
  })
}
