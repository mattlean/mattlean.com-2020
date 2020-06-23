import express from 'express'
import morgan from 'morgan'
import path from 'path'
import pages from './routes/pages'

const PORT = process.env.PORT || 3000

const app = express()

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line no-console
  console.log('🤖🖥️🛫 INITIATING DEVELOPMENT SERVER 🛫🖥️🤖')

  app.use(morgan('dev'))
  app.use(
    '/',
    express.static(path.join(__dirname, '../../build/front/development'))
  )
} else if (process.env.NODE_ENV === 'production') {
  // eslint-disable-next-line no-console
  console.log('🌎🖥️🛫 INITIATING PRODUCTION SERVER 🛫🖥️🌎')

  app.use(morgan('common'))
  express.static(path.join(__dirname, '../../build/front/production'))
} else {
  throw new Error('Server environment not set')
}

app.use('/', pages)

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
