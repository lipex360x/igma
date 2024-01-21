import type { RetrieveAccountUseCase } from '@/application/usecases'

import type { HttpServer } from '../http/HttpServer'

export class RetrieveAccountController {
  constructor(
    readonly httpServer: HttpServer,
    readonly useCase: RetrieveAccountUseCase,
  ) {
    httpServer.register('get', '/accounts/:cpf', async ({ params }: any, body: any) => {
      return this.useCase.execute(params)
    })
  }
}
