import type { Account } from '@/domain/entities'

export interface AccountRepository {
  save(account: Account): Promise<void>
  findByCpf(cpf: string): Promise<Account>
  list(params?: { page?: number; perPage?: number }): Promise<Account[]>
}
