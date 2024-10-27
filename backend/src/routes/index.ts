import { Router } from 'express'
import vehicleRouter from '../modules/vehicle/vehicle.controller'
import authConroller from '../modules/auth/auth.conroller'

const router = Router()

router.use(vehicleRouter)
router.use(authConroller)

export default router
