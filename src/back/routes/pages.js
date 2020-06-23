import { Router } from 'express'
import createTemplateString from '../render'

const router = Router()

router.get('/*', (req, res) => res.send(createTemplateString(req.url)))

export default router
