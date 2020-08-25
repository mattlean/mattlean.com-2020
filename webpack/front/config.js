const merge = require('webpack-merge')
const commonConfig = require('./common')

module.exports = ({ devType, type }) => {
  let config

  if (type === 'development') {
    config = require('./development')

    if (devType === 'front') {
      config = merge(config, require('./front-dev'))
    } else {
      config = merge(config, require('./ssr-dev'))
    }
  } else if (type === 'production') {
    config = require('./production')
  } else {
    throw new Error('webpack configuration type was not set')
  }

  return merge(commonConfig, config)
}
