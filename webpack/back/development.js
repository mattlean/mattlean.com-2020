const merge = require('webpack-merge')
const { BACK, SRC } = require('../../PATHS')
const { compileJS, genSourceMaps, setMode } = require('../parts')

module.exports = merge([
  {
    output: {
      path: BACK.BUILD_DEV,
    },
  },

  setMode('development'),

  compileJS({
    include: SRC,
    options: {
      presets: [['@babel/preset-react', { development: true }]],
    },
  }),

  genSourceMaps('cheap-module-eval-source-map'),
])
