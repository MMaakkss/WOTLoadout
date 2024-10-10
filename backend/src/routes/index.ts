import { Router } from 'express'
import vehicleRouter from '../modules/vehicle/vehicle.controller'

const router = Router()

router.use(vehicleRouter)

export default router
