import type { AccountRepository } from '../repository/AccountRepository'

export class ListAccountsUseCase {
  private DEFAULT_PAGE = 1
  private DEFAULT_PER_PAGE = 10

  constructor(readonly accountRepository: AccountRepository) {}

  async execute(params: Input): Promise<Output> {
    const pagination = {
      page: +params.page || this.DEFAULT_PAGE,
      perPage: +params.perPage || this.DEFAULT_PER_PAGE,
    }
    const accounts = await this.accountRepository.list(pagination)
    const data = accounts.map((account) => ({
      accountId: account.accountId,
      name: account.name,
      cpf: account.cpf.getValue(),
      birthDate: account.birthDate,
    }))
    return { data, ...pagination }
  }
}

type Input = {
  page?: number
  perPage?: number
}

type Output = {
  data: {
    accountId: string
    name: string
    cpf: string
    birthDate: Date
  }[]
  page: number
  perPage: number
}
