import ejs from 'ejs'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from '../../front/App'
import template from '../../front/template.ejs'
import { getRouteData } from '../../common/routeData'

/**
 * Create template string from template and App React component
 * @param {string} location Current URL from Express req object
 * @param {Object} [context={}] Information about a specific route render
 */
const createTemplateString = (location, context = {}) => {
  const app = renderToString(
    <StaticRouter location={location} context={context}>
      <App />
    </StaticRouter>
  )

  const { desc, keywords, title } = getRouteData(location)

  // TODO: render minified HTML for production
  return ejs.render(template, {
    app,
    desc,
    keywords,
    title,
    NODE_ENV: process.env.NODE_ENV,
  })
}

export default createTemplateString
