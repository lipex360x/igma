import 'dotenv/config'
import { RegisterAccountUseCase, RetrieveAccountUseCase } from './application/usecases'
import { ListAccountsController, RegisterAccountController, RetrieveAccountController } from './infra/controller'
import { ExpressAdapter } from './infra/http/adapters'
import { AccountRepositoryDatabase } from './infra/repositories/postgres/AccountRepositoryDatabase'

const httpServer = new ExpressAdapter()

const AccountRepository = new AccountRepositoryDatabase()
const registerAccount = new RegisterAccountUseCase(AccountRepository)
const retrieveAccount = new RetrieveAccountUseCase(AccountRepository)

new RegisterAccountController(httpServer, registerAccount)
new RetrieveAccountController(httpServer, retrieveAccount)
new ListAccountsController(httpServer)

httpServer.listen(+process.env.API_PORT)
