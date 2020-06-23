const merge = require('webpack-merge')
const { BACK, SRC } = require('../paths')
const { compileJS, genSourceMaps, setMode } = require('../parts')

module.exports = merge([
  {
    output: {
      path: BACK.BUILD_PROD,
    },
  },

  setMode('production'),

  compileJS({
    include: SRC,
    options: {
      presets: ['@babel/preset-react'],
    },
  }),

  genSourceMaps('source-map'),
])
