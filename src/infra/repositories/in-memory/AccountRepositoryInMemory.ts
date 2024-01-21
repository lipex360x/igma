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
}
