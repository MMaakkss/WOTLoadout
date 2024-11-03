import { NextFunction, Request, Response } from 'express'
import AuthService from './auth.service'

export default class AuthController {
  static async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body

      const data = await AuthService.login(email, password)

      res.json(data)
    } catch (error) {
      next(error)
    }
  }

  static async register(req: Request, res: Response, next: NextFunction) {
    try {
      const { nickname, email, password } = req.body

      const data = await AuthService.register({ nickname, email, password })

      res.json(data)
    } catch (error) {
      next(error)
    }
  }
}
