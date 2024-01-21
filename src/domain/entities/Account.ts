import crypto from 'node:crypto'

export class Account {
  private constructor(
    readonly accountId: string,
    readonly name: string,
    readonly cpf: string,
    readonly birthDate: Date,
  ) {}

  static create(name: string, cpf: string, birthDate: string) {
    const accountId = crypto.randomUUID()
    return new Account(accountId, name, cpf, new Date(birthDate))
  }
}
