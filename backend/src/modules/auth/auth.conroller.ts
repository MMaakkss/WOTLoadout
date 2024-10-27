import { NextFunction, Request, Response, Router } from 'express'
import {
  loginValidator,
  registerValidator,
} from '../../middlewares/authValidators'
import { inputValidation } from '../../middlewares/inputValidation'
import AuthService from './auth.service'

const router = Router()

router.post(
  '/login',
  loginValidator,
  inputValidation,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body

      const data = await AuthService.login(email, password)

      res.json(data)
    } catch (error) {
      next(error)
    }
  },
)

router.post(
  '/register',
  registerValidator,
  inputValidation,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await AuthService.register(req.body)

      res.json(data)
    } catch (error) {
      next(error)
    }
  },
)

export default router
