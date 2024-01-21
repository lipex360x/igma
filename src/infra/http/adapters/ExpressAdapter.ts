import type { Express, Request, Response } from 'express'
import express from 'express'

import type { HttpServer } from '../HttpServer'

export class ExpressAdapter implements HttpServer {
  private app: Express

  constructor() {
    this.app = express()
    this.app.use(express.json())
  }

  register(method: string, url: string, callback: Function): void {
    this.app[method](url, async function (request: Request, response: Response) {
      try {
        const output = await callback(request.params, request.body)
        response.json(output)
      } catch (error) {
        response.status(422).json({
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
