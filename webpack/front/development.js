const merge = require('webpack-merge')
const {
  compileJS,
  copyFiles,
  genSourceMaps,
  setFreeVariable,
  setMode,
} = require('ljas-webpack')
const { COMMON, FRONT, NODE_MODULES } = require('../../PATHS')

// eslint-disable-next-line no-console
console.log('🤡📦 STARTING FRONTEND DEVELOPMENT BUILD PROCESS 📦🤡')

let developmentConfig = merge([
  {
    entry: `${FRONT.SRC}/index.jsx`,

    output: {
      path: FRONT.BUILD_DEV,
    },
  },

  setMode('development'),

  compileJS({
    include: [FRONT.SRC, COMMON, `${NODE_MODULES}/eswiss`],
    options: {
      plugins: [
        [
          'prismjs',
          {
            languages: ['ejs', 'jsx', 'scss'],
          },
        ],
      ],
      presets: [['@babel/preset-react', { development: true }]],
    },
  }),

  copyFiles([{ from: 'src/front/util/dev.js' }]),

  genSourceMaps('cheap-module-eval-source-map'),

  setFreeVariable('__IS_DEVELOPMENT__', true),
])

developmentConfig = merge(
  developmentConfig,
  setFreeVariable('__GA__', process.env.GA)
)
if (!process.env.GA) {
  // eslint-disable-next-line no-console
  console.warn(
    '[WARNING] Google Analytics ID was not set and will not be included in the build'
  )
}

module.exports = developmentConfig
