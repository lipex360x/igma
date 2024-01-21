import type { AccountRepository } from '@/application/repository/AccountRepository'
import { RegisterAccountUseCase, RetrieveAccountUseCase } from '@/application/usecases'
import { AccountRepositoryInMemory } from '@/infra/repositories/in-memory/AccountRepositoryInMemory'

let registerAccount: RegisterAccountUseCase
let retrieveAccount: RetrieveAccountUseCase
let accountRepository: AccountRepository

describe('RegisterAccountUseCase', () => {
  beforeEach(() => {
    accountRepository = new AccountRepositoryInMemory()
    registerAccount = new RegisterAccountUseCase(accountRepository)
    retrieveAccount = new RetrieveAccountUseCase(accountRepository)
  })

  it('should register a account', async () => {
    const inputAccount = {
      name: 'johh Doe',
      email: 'johh@example.com',
      cpf: '41553189035',
      birthDate: '2000-01-01',
    }
    await registerAccount.execute(inputAccount)
    const inputRetrieveAccount = {
      cpf: '41553189035',
    }
    const outputRetrieveAccount = await retrieveAccount.execute(inputRetrieveAccount)
    expect(outputRetrieveAccount.name).toBe(inputAccount.name)
  })

  it('should return an error if account was not found', async () => {
    await expect(() => retrieveAccount.execute({ cpf: '41553189035' })).rejects.toThrow(new Error('account not found'))
  })
})
