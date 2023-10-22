import { useQuery } from 'react-query'

import { request } from '../../../../request'

export const useReposTannerlinsleyReactQueryGet = () => {
  return useQuery({
    queryFn: () =>
      request({ url: 'repos/tannerlinsley/react-query', method: 'GET' }),
  })
}
