import compression from 'compression'
import express from 'express'
// import helmet from 'helmet'
import morgan from 'morgan'
import errHandler from './err/errHandler'
import logger from './logger'
import route from './route'
import ServerErr from './err/ServerErr'
import { createNoMatchTemplateString } from './render'
import { FRONT } from '../../PATHS'

let PORT = process.env.PORT

const app = express()

if (process.env.NODE_ENV === 'development') {
  logger.info('🤖🔧 INITIATING DEVELOPMENT SERVER 🔧🤖')

  if (!process.env.GA) logger.warn('Google Analytics tracking ID was not set')
  if (!PORT) PORT = 9001

  app.use(morgan('dev'))
  app.use('/', express.static(FRONT.BUILD_DEV))
} else if (process.env.NODE_ENV === 'production') {
  logger.info('🤖🛫 INITIATING PRODUCTION SERVER 🛫🤖')

  if (!process.env.PORT) throw new ServerErr('SE002')
  if (!process.env.GA) throw new ServerErr('SE003')

  app.use(compression())
  // app.use(helmet())

  app.use(morgan('common'))
  app.use(
    '/',
    express.static(FRONT.BUILD_PROD, {
      setHeaders: (res, path) => {
        const codeRegExp = /\.[0-9a-f]{4}\.(css|js)/i
        const mediaRegExp = /\.(gif|ico|jpe?g|mov|mp4|png)$/

        if (codeRegExp.test(path)) {
          // Set cache age for code files to 1 year because
          // they will be invalidated when they are updated and deployed
          res.setHeader('Cache-Control', 'public, max-age=31536000')
        } else if (mediaRegExp.test(path)) {
          // Set cache age for media files to 1 day
          res.setHeader('Cache-Control', 'public, max-age=86400')
        }
      },
    })
  )
} else {
  throw new ServerErr('SE001')
}

/* Page Handler */
app.use('/', route)

/* No Match Handler */
app.use((req, res) =>
  res.status(404).send(createNoMatchTemplateString(req.path))
)

/* Error Handler */
app.use(errHandler)

app.listen(PORT, () => logger.info(`Server running on port ${PORT}`))
