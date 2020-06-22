const merge = require('webpack-merge')
const { BACK } = require('../paths')
const { compileJS, genSourceMaps, setMode } = require('../parts')

module.exports = merge([
  setMode('production'),

  compileJS({
    include: BACK.SRC,
    options: {
      presets: ['@babel/preset-react'],
    },
  }),

  genSourceMaps('source-map'),
])
