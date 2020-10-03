const merge = require('webpack-merge')
const { injectStyles } = require('ljas-webpack/style')
const { inlineMedia } = require('ljas-webpack/media')
const { setupDevServer } = require('ljas-webpack')
const { setupHTML } = require('ljas-webpack/html')
const { FRONT } = require('../../PATHS')

const {
  keywords,
  title,
} = require('../../src/common/data/route/ROOT_ROUTES.json')

module.exports = merge([
  {
    entry: `${FRONT.SRC}/front-dev.jsx`,
    output: {
      path: FRONT.BUILD_FRONT_DEV,
    },
  },

  injectStyles({
    cssLoaderOptions: { sourceMap: true },
    postCSSLoaderOptions: {
      postcssOptions: {
        plugins: [require('autoprefixer')],
      },
      sourceMap: true,
    },
    sassLoaderOptions: {
      sassOptions: {
        includePaths: ['node_modules/eswiss/dist'],
      },
      sourceMap: true,
    },
  }),

  inlineMedia(),

  setupDevServer({
    host: process.env.HOST,
    port: 9489,
    historyApiFallback: true,
  }),

  setupHTML({
    template: 'src/front/template.ejs',
    inject: false,
    templateParameters: {
      app: '',
      canon: '',
      css: '',
      desc:
        'The personal website of Matt Lean, a Silicon Valley full-stack web developer and UI/UX designer.',
      ga: '',
      js: '/main.js',
      keywords,
      og_img: '',
      og_img_alt: '',
      og_img_secure: '',
      og_img_height: '',
      og_img_width: '',
      og_type: '',
      title,
      twitter_card: '',
      twitter_img: '',
      twitter_img_alt: '',
      vendor: '',
      NODE_ENV: 'development',
    },
  }),
])
