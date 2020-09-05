import React from 'react'
import { render } from 'ejs'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from '../front/components/App'
import ERR_TEMPLATE from './err/err_template.ejs'
import TEMPLATE from '../front/template.ejs'
import { genHeadData } from '../common/util'
import { NO_MATCH_TITLE } from '../common/data/route'

let FRONT_ASSETS = {}
if (process.env.NODE_ENV === 'production') {
  FRONT_ASSETS = require('../../build/front/production/assets.json')
}

let jsFilename = '/'
let cssFilename = '/'

if (FRONT_ASSETS.main) {
  if (Array.isArray(FRONT_ASSETS.main) && FRONT_ASSETS.main.length > 0) {
    jsFilename += FRONT_ASSETS.main[0].filename
  } else {
    jsFilename += FRONT_ASSETS.main.filename
  }
} else {
  jsFilename += 'main.js'
}

if (FRONT_ASSETS.style) {
  if (Array.isArray(FRONT_ASSETS.style) && FRONT_ASSETS.style.length > 0) {
    cssFilename += FRONT_ASSETS.style[0].filename
  } else {
    cssFilename += FRONT_ASSETS.style.filename
  }
} else {
  cssFilename += 'style.css'
}

/**
 * Create template string from template and App React component
 * @param {string} location URL from Express req object
 * @param {Object} params Params from Express req object
 * @param {Object} [context={}] Information about a specific route render
 */
export const createTemplateString = (location, params, context = {}) => {
  const app = renderToString(
    <StaticRouter location={location} context={context}>
      <App />
    </StaticRouter>
  )

  const { desc, keywords, title } = genHeadData(location)

  // TODO: render minified HTML for production
  return render(TEMPLATE, {
    app,
    css: cssFilename,
    desc,
    keywords,
    js: jsFilename,
    title,
    NODE_ENV: process.env.NODE_ENV,
  })
}

/**
 * Create no match template string from template and App React component
 * @param {string} location URL from Express req object
 * @param {Object} [params] Params from Express req object
 * @param {Object} [context={}] Information about a specific route render
 */
export const createNoMatchTemplateString = (location, params, context = {}) => {
  const app = renderToString(
    <StaticRouter location={location} context={context}>
      <App />
    </StaticRouter>
  )

  return render(TEMPLATE, {
    app,
    css: cssFilename,
    desc: '',
    keywords: '',
    js: jsFilename,
    title: NO_MATCH_TITLE,
    NODE_ENV: process.env.NODE_ENV,
  })
}

/**
 * Create error template string
 */
export const createErrTemplateString = (title) =>
  render(ERR_TEMPLATE, { title, NODE_ENV: process.env.NODE_ENV })
