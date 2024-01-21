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
}
