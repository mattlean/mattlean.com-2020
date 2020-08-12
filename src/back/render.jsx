import ejs from 'ejs'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from '../front/components/App'
import template from '../front/template.ejs'
import { getRouteData, TITLE_SUFFIX } from '../common/routeData'
import { genFormattedPath } from '../common/util'

/**
 * Create template string from template and App React component
 * @param {string} location URL from Express req object
 * @param {Object} params Params from Express req object
 * @param {Object} [context={}] Information about a specific route render
 */
const createTemplateString = (location, params, context = {}) => {
  const app = renderToString(
    <StaticRouter location={location} context={context}>
      <App />
    </StaticRouter>
  )

  const path = genFormattedPath(location)
  const { desc, keywords, title } = getRouteData(path)
  const fullTitle = path !== '/' ? `${title}${TITLE_SUFFIX}` : title

  // TODO: render minified HTML for production
  return ejs.render(template, {
    app,
    desc,
    keywords,
    title: fullTitle,
    NODE_ENV: process.env.NODE_ENV,
  })
}

export default createTemplateString
