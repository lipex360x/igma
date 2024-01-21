import type { AccountRepository } from '@/application/repository/AccountRepository'
import type { Account } from '@/domain/entities'

export class AccountRepositoryInMemory implements AccountRepository {
  accounts: Account[]

  constructor() {
    this.accounts = []
  }

  async save(account: Account): Promise<void> {
    this.accounts.push(account)
  }

  async findByCpf(cpf: string): Promise<Account> {
    return this.accounts.find((account) => account.cpf.getValue() === cpf)
  }

  async list(params?: Pagination): Promise<Account[]> {
    return this.arrayPagination(this.accounts, params)
  }

  private arrayPagination(array: Account[], params: Pagination) {
    return array.slice((params.page - 1) * params.perPage, params.page * params.perPage)
  }
}

type Pagination = {
  page: number
  perPage: number
}
