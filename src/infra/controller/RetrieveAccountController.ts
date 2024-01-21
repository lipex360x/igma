import type { HttpServer } from '../http/HttpServer'

export class RetrieveAccountController {
  constructor(readonly httpServer: HttpServer) {
    httpServer.register('get', '/accounts/:cpf', async (params: any, body: any) => {
      return { message: `GET: hello account cpf ${params.cpf}` }
    })
  }
}
