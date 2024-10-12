import { NextFunction, Request, Response, Router } from 'express'
import VehicleService from './vehicle.servise'

const router = Router()

router.get(
  '/getList',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const list = await VehicleService.getList()

      res.json({ data: list })
    } catch (error) {
      next(error)
    }
  },
)

export default router
