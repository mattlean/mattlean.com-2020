import express from 'express'
import morgan from 'morgan'
import route from './route'
import ServerErr from './util/ServerErr'
import { FRONT } from '../../PATHS'

let PORT = process.env.PORT

const app = express()

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line no-console
  console.log('🤖🔧 INITIATING DEVELOPMENT SERVER 🔧🤖')

  if (!PORT) PORT = 9001

  app.use(morgan('dev'))
  app.use('/', express.static(FRONT.BUILD_DEV))
} else if (process.env.NODE_ENV === 'production') {
  // eslint-disable-next-line no-console
  console.log('🤖🛫 INITIATING PRODUCTION SERVER 🛫🤖')

  if (!process.env.PORT) {
    throw new ServerErr('SE002')
  }

  app.use(morgan('common'))
  app.use('/', express.static(FRONT.BUILD_PROD))
} else {
  throw new ServerErr('SE001')
}

app.use('/', route)

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
