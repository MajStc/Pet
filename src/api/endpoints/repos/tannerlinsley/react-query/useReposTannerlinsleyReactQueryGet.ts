import { useQuery } from '@tanstack/react-query'

import { request } from '../../../../request'

export const useReposTannerlinsleyReactQueryGet = () => {
  return useQuery({
    queryFn: () =>
      request({ url: 'repos/tannerlinsley/react-query', method: 'GET' }),
    queryKey: ['a'],
  })
}
