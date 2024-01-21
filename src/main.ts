import 'dotenv/config'
import { RegisterAccountUseCase } from './application/usecases'
import { ListAccountsController, RegisterAccountController, RetrieveAccountController } from './infra/controller'
import { ExpressAdapter } from './infra/http/adapters'
import { AccountRepositoryDatabase } from './infra/repositories/postgres/AccountRepositoryDatabase'

const httpServer = new ExpressAdapter()

const AccountRepository = new AccountRepositoryDatabase()
const registerAccount = new RegisterAccountUseCase(AccountRepository)

new RegisterAccountController(httpServer, registerAccount)
new ListAccountsController(httpServer)
new RetrieveAccountController(httpServer)

httpServer.listen(+process.env.API_PORT)
