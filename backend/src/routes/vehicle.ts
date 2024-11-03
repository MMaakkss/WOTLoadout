import { Router } from 'express'

import VehicleController from '../modules/vehicle/vehicle.controller'

const router = Router()

router.get('/getList', VehicleController.getList)

export default router
