const merge = require('webpack-merge')
const { cleanBuild, loadSVGs, setFreeVariable } = require('../parts')
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

  loadSVGs(),

  setFreeVariable('__isServer__', false),
])
