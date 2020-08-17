import { Router } from 'express'
import { createTemplateString } from './render'
import { genFormattedPath } from '../common/util'
import { getRouteData } from '../common/data/route'

const router = Router()

/* Page Handler */
router.get(/^\/(about|blog|contact|projects)\/?|^\/$/, (req, res, next) => {
  const path = getRouteData(genFormattedPath(req.url))
  if (!path) return next() // Project not found, call no match handler

  return res.send(createTemplateString(req.url, req.params))
})

export default router
