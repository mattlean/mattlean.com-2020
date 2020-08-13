import { Router } from 'express'
import { createTemplateString } from './render'
import { genFormattedPath } from '../common/util'
import { getRouteData } from '../common/routeData'

const router = Router()

/* Project Page Handler */
router.get('/projects/:id/?', (req, res, next) => {
  const path = getRouteData(genFormattedPath(req.url))
  if (!path) return next() // Project not found, call no match handler

  return res.send(createTemplateString(req.url, req.params))
})

/* Root Page Handler */
router.get(/\/(about|blog|contact|projects)\/?$|^\/$/, (req, res) => {
  return res.send(createTemplateString(req.url))
})

export default router
