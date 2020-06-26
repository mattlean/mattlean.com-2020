const merge = require('webpack-merge')
const { cleanBuild, setFreeVariable } = require('../parts')
const { FRONT } = require('../../PATHS')

module.exports = merge([
  {
    entry: `${FRONT.SRC}/index.jsx`,

    output: {
      filename: 'main.js',
    },

    resolve: {
      extensions: ['.js', '.jsx'],
    },
  },

  cleanBuild(),

  setFreeVariable('__isServer__', false),
])
