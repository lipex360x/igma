import type { HttpServer } from '../http/HttpServer'

export class RegisterAccountController {
  constructor(readonly httpServer: HttpServer) {
    httpServer.register('post', '/accounts', async (params: any, body: any) => {
      return { message: 'POST: hello account', body }
    })
  }
}
