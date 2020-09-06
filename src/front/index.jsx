import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { hydrate } from 'react-dom'
import App from './components/App'
import './index.scss'

window.isInit = true

// eslint-disable-next-line no-console
if (!__GA__) console.warn('GA was not set')

hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
