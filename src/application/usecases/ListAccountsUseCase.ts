import type { AccountRepository } from '../repository/AccountRepository'

export class ListAccountsUseCase {
  constructor(readonly accountRepository: AccountRepository) {}

  async execute(params: Input): Promise<Output[]> {
    const defaultPage = 1
    const defaultPerPage = 10
    const pagination = {
      page: params.page || defaultPage,
      perPage: params.perPage || defaultPerPage,
    }
    const accounts = await this.accountRepository.list(pagination)
    return accounts.map((account) => ({
      accountId: account.accountId,
      name: account.name,
      cpf: account.cpf.getValue(),
      birthDate: account.birthDate,
    }))
  }
}

type Input = {
  page?: number
  perPage?: number
}

type Output = {
  accountId: string
  name: string
  cpf: string
  birthDate: Date
}
