import React, { useState } from 'react'
import { hydrate } from 'react-dom'
import App from './App'
import './style.scss'

hydrate(<App />, document.getElementById('root'))
