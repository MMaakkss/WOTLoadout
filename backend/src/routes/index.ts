import { Router } from 'express'
import auth from './auth'

import vehicle from './vehicle'

const router = Router()

router.use('/auth', auth)
router.use('/vehicle', vehicle)

export default router
