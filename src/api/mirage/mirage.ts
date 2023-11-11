import { createServer, Response } from 'miragejs'

import { BASE_API_URL } from '../constants'

export const runMockServer = () => {
  if (window.server != null) {
    window.server.shutdown()
  }

  window.server = createServer({
    routes() {
      this.urlPrefix = BASE_API_URL

      this.get(
        '/movies',
        () =>
          new Response(
            200,
            {},
            {
              movies: [
                { id: 1, name: 'Inception', year: 2010 },
                { id: 2, name: 'Interstellar', year: 2014 },
                { id: 3, name: 'Dunkirk', year: 2017 },
              ],
            },
          ),
        { timing: 2000 },
      )
    },
  })
}
