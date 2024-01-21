import { PrismaClient } from '@prisma/client'

export class PrismaAdapter {
  prisma: PrismaClient

  constructor() {
    this.prisma = new PrismaClient({
      log: process.env.NODE_ENV === 'dev' ? ['query'] : [],
    })
  }
}
