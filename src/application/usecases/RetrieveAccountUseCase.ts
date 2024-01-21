import type { AccountRepository } from '../repository/AccountRepository'

export class RetrieveAccountUseCase {
  constructor(readonly accountRepository: AccountRepository) {}

  async execute(input: Input): Promise<Output> {
    const account = await this.accountRepository.findByCpf(input.cpf)
    if (!account) throw new Error('account not found')
    return {
      accountId: account.accountId,
      name: account.name,
      cpf: account.cpf.getValue(),
      birthDate: account.birthDate,
    }
  }
}

type Input = {
  cpf: string
}

type Output = {
  accountId: string
  name: string
  cpf: string
  birthDate: Date
}
