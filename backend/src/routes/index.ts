import { Router } from "express"
import tankRouter from "@/controllers/tank/tank.controller"

const router = Router()

router.use(tankRouter)

export default router
