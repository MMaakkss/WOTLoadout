import { Router } from 'express'
import {
  loginValidator,
  registerValidator,
} from '../middlewares/authValidators'
import { inputValidation } from '../middlewares/inputValidation'
import AuthController from '../modules/auth/auth.controller'
import VehicleController from '../modules/vehicle/vehicle.controller'

const router = Router()

router.post(
  '/auth/login',
  loginValidator,
  inputValidation,
  AuthController.login,
)
router.post(
  '/auth/register',
  registerValidator,
  inputValidation,
  AuthController.register,
)

router.get('/vehicle/getList', VehicleController.getList)

export default router
