const merge = require('webpack-merge')
const { cleanBuild, copyFiles, loadSVGs, setFreeVariable } = require('../parts')

module.exports = merge([
  {
    output: {
      filename: 'main.js',
      publicPath: '/',
    },

    resolve: {
      extensions: ['.js', '.jsx'],
    },
  },

  cleanBuild(),

  copyFiles([
    { from: 'src/front/assets/favicon.ico' },
    { from: 'src/front/assets/logo/logo.png' },
    { from: 'src/front/assets/logo/social.png' },
  ]),

  loadSVGs(),

  setFreeVariable('__IS_SERVER__', false),
])
