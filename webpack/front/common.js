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
    { from: 'src/front/assets/logo/logo.png', to: 'media' },
    { from: 'src/front/assets/logo/social.png', to: 'media' },
    {
      from: 'src/front/assets/posts/cs-lean-space/lean-space-social.png',
      to: 'media',
    },
    {
      from: 'src/front/assets/posts/cs-sot/sot-social.png',
      to: 'media',
    },
    {
      from: 'src/front/assets/projects/crush/crush-social.png',
      to: 'media',
    },
  ]),

  loadSVGs(),

  setFreeVariable('__IS_SERVER__', false),
])
