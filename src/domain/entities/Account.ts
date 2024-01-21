import crypto from 'node:crypto'

import { Cpf } from './Cpf'

export class Account {
  private constructor(
    readonly accountId: string,
    readonly name: string,
    readonly cpf: Cpf,
    readonly birthDate: Date,
  ) {}

  static create(name: string, cpf: string, birthDate: string) {
    const accountId = crypto.randomUUID()
    return new Account(accountId, name, new Cpf(cpf), new Date(birthDate))
  }
}
