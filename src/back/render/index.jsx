import React from 'react'
import { renderToString } from 'react-dom/server'
import App from '../../front/App'
import template from '../../front/template.html'

const app = renderToString(<App />)
const t = template.replace(
  '<div id="root"></div>',
  `<div id="root">${app}</div>`
)

const createTemplate = () => {
  return t
}

export default createTemplate
