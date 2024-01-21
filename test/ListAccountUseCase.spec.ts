import type { AccountRepository } from '@/application/repository/AccountRepository'
import { RegisterAccountUseCase, ListAccountsUseCase } from '@/application/usecases'
import { AccountRepositoryInMemory } from '@/infra/repositories/in-memory/AccountRepositoryInMemory'

let registerAccount: RegisterAccountUseCase
let listAccounts: ListAccountsUseCase
let accountRepository: AccountRepository

describe('RegisterAccountUseCase', () => {
  beforeEach(() => {
    accountRepository = new AccountRepositoryInMemory()
    registerAccount = new RegisterAccountUseCase(accountRepository)
    listAccounts = new ListAccountsUseCase(accountRepository)
  })

  it('should register a account', async () => {
    await registerAccount.execute({
      name: 'johh Doe',
      cpf: '674.653.980-61',
      birthDate: '2000-01-01',
    })
    await registerAccount.execute({
      name: 'johh Doe',
      cpf: '41553189035',
      birthDate: '2000-01-01',
    })
    await registerAccount.execute({
      name: 'johh Doe',
      cpf: '36448977007',
      birthDate: '2000-01-01',
    })
    await registerAccount.execute({
      name: 'johh Doe',
      cpf: '69082239060',
      birthDate: '2000-01-01',
    })
    await registerAccount.execute({
      name: 'johh Doe',
      cpf: '16249898026',
      birthDate: '2000-01-01',
    })
    await registerAccount.execute({
      name: 'johh Doe',
      cpf: '14619913073',
      birthDate: '2000-01-01',
    })
    const inputPaginated = {
      page: 2,
      perPage: 3,
    }
    const outputRetrieveAccountPaginated = await listAccounts.execute(inputPaginated)
    expect(outputRetrieveAccountPaginated.data.length).toBe(3)
    expect(outputRetrieveAccountPaginated.data[1].cpf).toBe('16249898026')
  })
})
