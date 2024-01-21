import { Account } from '@/domain/entities'

describe('Account', () => {
  it('should create a account', () => {
    const input = {
      name: 'John Doe',
      cpf: '97456321558',
      birthDate: '2000-01-01',
    }
    const output = Account.create(input.name, input.cpf, input.birthDate)
    expect(output.accountId).toBeDefined()
    expect(output.cpf.getValue()).toBe('97456321558')
  })
})
