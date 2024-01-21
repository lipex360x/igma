import type { AccountRepository } from '@/application/repository/AccountRepository'
import type { Account } from '@/domain/entities'
import { PrismaAdapter } from '@/infra/database/adapters'

export class AccountRepositoryDatabase implements AccountRepository {
  orm: PrismaAdapter

  constructor() {
    this.orm = new PrismaAdapter()
  }

  async save(account: Account): Promise<void> {
    await this.orm.prisma.account.create({
      data: {
        account_id: account.accountId,
        name: account.name,
        birth_date: account.birthDate,
      },
    })
  }

  findByCpf(cpf: string): Promise<Account> {
    throw new Error('Method not implemented.')
  }

  list(params?: Pagination): Promise<Account[]> {
    throw new Error('Method not implemented.')
  }
}

type Pagination = {
  page: number
  perPage: number
}
