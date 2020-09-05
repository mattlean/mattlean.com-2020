import { Router } from 'express'
import { createTemplateString } from './render'
import { genFormattedPath } from '../common/util'
import { getRouteData } from '../common/data/route'

const router = Router()

/* Legacy Lean Space Redirects */
router.get(
  /^(\/about\/index.html|\/resume\/?|\/resume\/index.html)$/,
  (req, res) => res.redirect(301, '/about')
)

router.get(
  /^(\/blog\/index.html|\/blog\/case-studies\/?|\/blog\/case-studies\/index.html|\/blog\/miscellaneous\/?|\/blog\/miscellaneous\/index.html)$/,
  (req, res) => res.redirect(301, '/blog')
)

router.get(
  /^(\/blog\/a-room-too-far\/?|^\/blog\/a-room-too-far\/index.html)$/,
  (req, res) =>
    res.redirect(301, 'http://leanspace.mattlean.com/blog/a-room-too-far')
)

router.get(
  /^(\/blog\/hello-world\/?|^\/blog\/hello-world\/index.html)$/,
  (req, res) =>
    res.redirect(301, 'http://leanspace.mattlean.com/blog/hello-world')
)

router.get(
  /^(\/blog\/spectral-overlay-tool\/?|^\/blog\/spectral-overlay-tool\/index.html)$/,
  (req, res) => res.redirect(301, '/blog/cs-sot')
)

router.get(/^\/contact\/index.html$/, (req, res) =>
  res.redirect(301, '/contact')
)

router.get(/^(\/work\/?|\/work\/index.html)$/, (req, res) =>
  res.redirect(301, '/projects')
)

router.get(
  /^(\/work\/adam-engine\/?|^\/work\/adam-engine\/index.html)$/,
  (req, res) => res.redirect(301, '/projects/adam')
)

router.get(/^(\/work\/artf\/?|^\/work\/artf\/index.html)$/, (req, res) =>
  res.redirect(301, 'http://leanspace.mattlean.com/work/artf')
)

router.get(
  /^(\/work\/hr4e-survey\/?|^\/work\/hr4e-survey\/index.html)$/,
  (req, res) =>
    res.redirect(301, 'http://leanspace.mattlean.com/work/hr4e-survey')
)

router.get(
  /^(\/work\/lanternjs\/?|^\/work\/lanternjs\/index.html)$/,
  (req, res) => res.redirect(301, '/projects/lantern')
)

router.get(
  /^(\/work\/lean-space\/?|^\/work\/lean-space\/index.html)$/,
  (req, res) => res.redirect(301, '/projects/lean-space')
)

router.get(
  /^(\/work\/lean-theme\/?|^\/work\/lean-theme\/index.html)$/,
  (req, res) =>
    res.redirect(301, 'http://leanspace.mattlean.com/work/lean-theme')
)

router.get(
  /^(\/work\/project-owl\/?|^\/work\/project-owl\/index.html)$/,
  (req, res) => res.redirect(301, '/projects/owl')
)

router.get(
  /^(\/work\/qpcr-crush\/?|^\/work\/qpcr-crush\/index.html)$/,
  (req, res) => res.redirect(301, '/projects/crush')
)

router.get(
  /^(\/work\/scfgc-ranking-system\/?|^\/work\/scfgc-ranking-system\/index.html)$/,
  (req, res) =>
    res.redirect(301, 'http://leanspace.mattlean.com/work/scfgc-ranking-system')
)

router.get(
  /^(\/work\/spectral-overlay-tool\/?|^\/work\/spectral-overlay-tool\/index.html)$/,
  (req, res) => res.redirect(301, '/projects/sot')
)

router.get(
  /^(\/work\/themeboot\/?|^\/work\/themeboot\/index.html)$/,
  (req, res) => res.redirect(301, '/projects/themeboot')
)

router.get(/^(\/work\/xuehua\/?|^\/work\/xuehua\/index.html)$/, (req, res) =>
  res.redirect(301, 'http://leanspace.mattlean.com/work/xuehua')
)

/* Page Handler */
router.get(/^\/(about|blog|contact|projects)\/?|^\/$/, (req, res, next) => {
  const path = getRouteData(genFormattedPath(req.url))
  if (!path) return next() // Project not found, call no match handler

  return res.send(createTemplateString(req.url, req.params))
})

/* Test Server Error Page */
// router.get('/test-500', (req, res, next) => {
//   res.status(500)
//   return next(new Error('Manual error 500 test triggered'))
// })

export default router
