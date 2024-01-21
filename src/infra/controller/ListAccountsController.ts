import type { ListAccountsUseCase } from '@/application/usecases'

import type { HttpServer } from '../http/HttpServer'

export class ListAccountsController {
  constructor(
    readonly httpServer: HttpServer,
    readonly useCase: ListAccountsUseCase,
  ) {
    httpServer.register('get', '/accounts', async ({ query }: any, body: any) => {
      return this.useCase.execute(query)
    })
  }
}
