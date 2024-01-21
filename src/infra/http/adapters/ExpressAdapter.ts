import type { Express, Request, Response } from 'express'
import express from 'express'
import status from 'http-status'
import swaggerUi from 'swagger-ui-express'

import type { HttpServer } from '../HttpServer'
import * as swaggerConfig from './swagger.json'

export class ExpressAdapter implements HttpServer {
  private app: Express

  constructor() {
    this.app = express()
    this.app.use(express.json())
    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig))
  }

  register(method: string, url: string, callback: Function, statusCode = status.OK): void {
    this.app[method](url, async function (request: Request, response: Response) {
      try {
        const output = await callback(request, request.body)
        response.status(statusCode).json(output)
      } catch (error) {
        response.status(status.UNPROCESSABLE_ENTITY).json({
          message: error.message,
        })
      }
    })
  }

  listen(port: number): void {
    this.app.listen(port)
    console.log(`server started. port ${port}`)
  }
}
