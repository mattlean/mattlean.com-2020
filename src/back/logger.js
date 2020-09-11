import { createLogger, format, transports } from 'winston'

const customFormat = format.printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level}]: ${message}`
})

const logger = createLogger({
  format: format.combine(format.timestamp(), format.json()),
  transports: [
    new transports.File({
      filename: 'error.log',
      level: 'error',
    }),
    new transports.File({ filename: 'combined.log', timestamp: true }),
  ],
})

if (process.env.CONSOLE || process.env.NODE_ENV !== 'production') {
  logger.add(
    new transports.Console({
      format: customFormat,
    })
  )
}

export default logger
