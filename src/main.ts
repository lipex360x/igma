import 'dotenv/config'
import { ListAccountsController, RegisterAccountController, RetrieveAccountController } from './infra/controller'
import { ExpressAdapter } from './infra/http/adapters'

const httpServer = new ExpressAdapter()

new RegisterAccountController(httpServer)
new ListAccountsController(httpServer)
new RetrieveAccountController(httpServer)

httpServer.listen(+process.env.API_PORT)
