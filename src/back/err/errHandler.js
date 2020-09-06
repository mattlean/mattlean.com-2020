import logger from '../logger'
import { createErrTemplateString } from '../render'

/**
 * Error handler that renders page
 */
// eslint-disable-next-line no-unused-vars
const errHandler = (err, req, res, next) => {
  logger.error(err.stack)
  if (!res.statusCode || res.statusCode < 400 || res.statusCode > 599) {
    res.status(500)
  }

  let title
  if (res.statusCode === 500) {
    title = '500: Internal Server&nbsp;Error'
  } else {
    title = `${res.statusCode}: Server&nbsp;Error`
  }

  res.send(createErrTemplateString(title))
}

export default errHandler
