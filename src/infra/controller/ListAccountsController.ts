import type { HttpServer } from '../http/HttpServer'

export class ListAccountsController {
  constructor(readonly httpServer: HttpServer) {
    httpServer.register('get', '/accounts', async (params: any, body: any) => {
      return { message: 'GET: hello accounts' }
    })
  }
}
