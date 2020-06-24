import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { hydrate } from 'react-dom'
import App from './App'
import './style.scss'

hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
