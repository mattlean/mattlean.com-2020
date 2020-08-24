import compression from 'compression'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import errHandler from './err/errHandler'
import logger from './logger'
import route from './route'
import ServerErr from './err/ServerErr'
import { createNoMatchTemplateString } from './render'
import { FRONT } from '../../PATHS'

let PORT = process.env.PORT

const app = express()

app.use(compression())
app.use(helmet())

if (process.env.NODE_ENV === 'development') {
  logger.info('🤖🔧 INITIATING DEVELOPMENT SERVER 🔧🤖')

  if (!PORT) PORT = 9001

  app.use(morgan('dev'))
  app.use('/', express.static(FRONT.BUILD_DEV))
} else if (process.env.NODE_ENV === 'production') {
  logger.info('🤖🛫 INITIATING PRODUCTION SERVER 🛫🤖')

  if (!process.env.PORT) {
    throw new ServerErr('SE002')
  }

  app.use(morgan('common'))
  app.use('/', express.static(FRONT.BUILD_PROD))
} else {
  throw new ServerErr('SE001')
}

/* Page Handler */
app.use('/', route)

/* No Match Handler */
app.use((req, res) =>
  res.status(404).send(createNoMatchTemplateString(req.url))
)

/* Error Handler */
app.use(errHandler)

app.listen(PORT, () => logger.info(`Server running on port ${PORT}`))
