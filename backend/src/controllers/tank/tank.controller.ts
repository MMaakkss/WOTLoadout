import { NextFunction, Request, Response, Router } from "express"
import { TankService } from "./tank.servise"

const tankService = new TankService()

const router = Router()

router.get(
  "/getList",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const list = await tankService.getList()

      res.json({ data: list })
    } catch (error) {
      next(error)
    }
  }
)

export default router
