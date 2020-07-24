import { Router } from 'express'
import createTemplateString from './render'

const router = Router()

router.get('/projects/:id', (req, res) =>
  res.send(createTemplateString(req.url, req.params))
)

router.get(/\/(about|blog|contact|projects)$|\/$/, (req, res) =>
  res.send(createTemplateString(req.url))
)

export default router
