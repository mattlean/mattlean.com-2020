const merge = require('webpack-merge')
const { cleanBuild, copyFiles, loadSVGs, setFreeVariable } = require('../parts')
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

  copyFiles([{ from: 'src/front/assets/favicon.ico' }]),

  loadSVGs(),

  setFreeVariable('__isServer__', false),
])
