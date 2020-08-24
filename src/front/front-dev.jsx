import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { render } from 'react-dom'
import App from './components/App'
import './index.scss'

// eslint-disable-next-line no-console
console.log('🤡🔧 RUNNING FRONT-DEV MODE 🔧🤡')

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
