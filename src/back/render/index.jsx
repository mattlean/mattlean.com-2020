import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from '../../front/App'
import template from '../../front/template.html'

/**
 * Create template string from template and App React component
 * @param {*} location Current URL
 * @param {Object} [context={}] Information about a specific route render
 */
const createTemplateString = (location, context = {}) => {
  const app = renderToString(
    <StaticRouter location={location} context={context}>
      <App />
    </StaticRouter>
  )
  return template.replace(
    '<div id="root"></div>',
    `<div id="root">${app}</div>`
  )
}

export default createTemplateString
