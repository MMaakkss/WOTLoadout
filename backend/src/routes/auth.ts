import { Router } from 'express'
import {
  loginValidator,
  registerValidator,
} from '../middlewares/authValidators'
import { inputValidation } from '../middlewares/inputValidation'
import AuthController from '../modules/auth/auth.controller'

const router = Router()

router.post('/login', loginValidator, inputValidation, AuthController.login)

router.post(
  '/register',
  registerValidator,
  inputValidation,
  AuthController.register,
)

export default router
