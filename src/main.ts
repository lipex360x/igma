import 'dotenv/config'
import { ExpressAdapter } from './infra/http/ExpressAdapter'

const httpServer = new ExpressAdapter()
httpServer.listen(+process.env.API_PORT)
