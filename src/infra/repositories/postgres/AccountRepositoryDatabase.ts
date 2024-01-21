import type { AccountRepository } from '@/application/repository/AccountRepository'
import { Account } from '@/domain/entities'
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
        cpf: account.cpf.getValue(),
        birth_date: account.birthDate,
      },
    })
  }

  async findByCpf(cpf: string): Promise<Account> {
    const accountData = await this.orm.prisma.account.findUnique({ where: { cpf } })
    if (!accountData) return undefined
    return Account.restore(accountData.account_id, accountData.name, accountData.cpf, accountData.birth_date)
  }

  async list(params?: Pagination): Promise<Account[]> {
    const accountData = await this.orm.prisma.account.findMany({
      skip: params.page - 1,
      take: params.perPage,
      orderBy: { created_at: 'desc' },
    })
    const accounts: Account[] = []
    for (const account of accountData) {
      accounts.push(Account.restore(account.account_id, account.name, account.cpf, account.birth_date))
    }
    return accounts
  }
}

type Pagination = {
  page: number
  perPage: number
}
