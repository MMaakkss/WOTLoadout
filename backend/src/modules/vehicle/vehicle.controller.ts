import { NextFunction, Request, Response } from 'express'
import VehicleService from './vehicle.service'

export default class VehicleController {
  static async getList(req: Request, res: Response, next: NextFunction) {
    try {
      const list = await VehicleService.getList()

      res.json({ data: list })
    } catch (error) {
      next(error)
    }
  }
}
