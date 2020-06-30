import { Router } from 'express'
import createTemplateString from './render'

const router = Router()

router.get('/', (req, res) => res.send(createTemplateString(req.url)))

router.get('/about', (req, res) => res.send(createTemplateString(req.url)))

router.get('/blog', (req, res) => res.send(createTemplateString(req.url)))

router.get('/contact', (req, res) => res.send(createTemplateString(req.url)))

export default router
