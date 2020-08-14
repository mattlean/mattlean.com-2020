import React from 'react'
import { render } from 'ejs'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from '../front/components/App'
import ERR_TEMPLATE from './err/err_template.ejs'
import TEMPLATE from '../front/template.ejs'
import { genHeadData } from '../common/util'
import { NO_MATCH_TITLE } from '../common/routeData'

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
    desc,
    keywords,
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
    desc: '',
    keywords: '',
    title: NO_MATCH_TITLE,
    NODE_ENV: process.env.NODE_ENV,
  })
}

/**
 * Create error template string
 */
export const createErrTemplateString = (title) =>
  render(ERR_TEMPLATE, { title })
