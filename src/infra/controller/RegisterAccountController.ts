import type { RegisterAccountUseCase } from '@/application/usecases'

import type { HttpServer } from '../http/HttpServer'

export class RegisterAccountController {
  constructor(
    readonly httpServer: HttpServer,
    readonly useCase: RegisterAccountUseCase,
  ) {
    httpServer.register('post', '/accounts', async (params: any, body: any) => {
      const output = await this.useCase.execute(body)
      return output
    })
  }
}
