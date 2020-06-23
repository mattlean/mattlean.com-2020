import { Router } from 'express'
import createTemplate from '../render'

const router = Router()

router.get('/', (req, res) => res.send(createTemplate()))

export default router
