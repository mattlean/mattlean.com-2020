const merge = require('webpack-merge')
const commonConfig = require('./common')

module.exports = ({ type }) => {
  let config

  if(type === 'development') {
    config = require('./development')
  } else if(type === 'production') {
    config = require('./production')
  } else {
    throw new Error('webpack configuration type was not set')
  }

  return merge(commonConfig, config)
}
