import { Account } from '@/domain/entities'

import type { AccountRepository } from '../repository/AccountRepository'

export class RegisterAccountUseCase {
  constructor(readonly accountRepository: AccountRepository) {}

  async execute(input: Input): Promise<Output> {
    const account = Account.create(input.name, input.cpf, input.birthDate)
    await this.accountRepository.save(account)
    return { accountId: account.accountId }
  }
}

type Input = {
  name: string
  cpf: string
  birthDate: string
}

type Output = {
  accountId: string
}
