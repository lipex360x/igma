import type { AccountRepository } from '@/application/repository/AccountRepository'
import { RegisterAccountUseCase } from '@/application/usecases'
import { AccountRepositoryInMemory } from '@/infra/repositories/in-memory/AccountRepositoryInMemory'

let registerAccount: RegisterAccountUseCase
let accountRepository: AccountRepository

describe('RegisterAccountUseCase', () => {
  beforeEach(() => {
    accountRepository = new AccountRepositoryInMemory()
    registerAccount = new RegisterAccountUseCase(accountRepository)
  })

  it('should register a account', async () => {
    const inputAccount = {
      name: 'johh Doe',
      cpf: '41553189035',
      birthDate: '2000-01-01',
    }
    const outputRegisterAccount = await registerAccount.execute(inputAccount)
    expect(outputRegisterAccount.accountId).toBeDefined()
  })
})
