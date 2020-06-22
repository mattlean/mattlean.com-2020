const express = require('express')
const morgan = require('morgan')
const path = require('path')
const pages = require('./routes/pages')

const PORT = process.env.PORT || 3000

const app = express()

console.log(path.join(__dirname, '../../build/front'))

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line no-console
  console.log('🤖🖥️🛫 INITIATING DEVELOPMENT SERVER 🛫🖥️🤖')

  app.use(morgan('dev'))
} else if (process.env.NODE_ENV === 'production') {
  // eslint-disable-next-line no-console
  console.log('🌎🖥️🛫 INITIATING PRODUCTION SERVER 🛫🖥️🌎')

  app.use(morgan('common'))
} else {
  throw new Error('Server environment not set')
}

app.use('/', express.static(path.join(__dirname, '../../build/front')))
app.use('/', pages)

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
