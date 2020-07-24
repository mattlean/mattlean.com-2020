import ejs from 'ejs'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from '../front/components/App'
import template from '../front/template.ejs'
import { getProjectData } from '../common/projectData'
import { getRouteData } from '../common/routeData'
import { getRootPath } from '../common/util'

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

  let desc, keywords, title

  if (params) {
    const rootPath = getRootPath(location)

    if (rootPath === 'projects') {
      const projectData = getProjectData(params.id)
      desc = projectData.long
      keywords = projectData.tags
      title = projectData.name
    }
  } else {
    ;({ desc, keywords, title } = getRouteData(location))
  }

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
