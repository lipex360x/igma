import { Cpf } from '@/domain/entities'

describe('Cpf', () => {
  it('should create a cpf', () => {
    const input = {
      cpf: '41553189035',
    }
    const output = new Cpf(input.cpf)
    expect(output.value).toBe('41553189035')
  })
})
