const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const nodeExternals = require('webpack-node-externals')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { DefinePlugin } = require('webpack')

/**
 * Build styles
 * 1. Compiles Sass to CSS with sass-loader
 * 2. Runs PostCSS with Autoprefixer plugin
 * 3. Interprets @import and url() like import/require() and resolves them with css-loader
 * 4. Extracts CSS into separate file
 */
exports.buildStyles = ({
  cssLoaderOptions,
  postCSSLoaderOptions,
  sassLoaderOptions,
} = {}) => ({
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: cssLoaderOptions,
          },
          {
            loader: 'postcss-loader',
            options: postCSSLoaderOptions,
          },
          {
            loader: 'sass-loader',
            options: sassLoaderOptions,
          },
        ],
      },
    ],
  },
})

/**
 * Delete the build folder if it exists
 */
exports.cleanBuild = () => ({
  plugins: [new CleanWebpackPlugin()],
})

/**
 * Compile JavaScript with Babel
 */
exports.compileJS = ({ exclude, include, options } = {}) => ({
  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        exclude,
        include,
        use: {
          loader: 'babel-loader',
          options,
        },
      },
    ],
  },
})

/**
 * Copy files from one location to another
 */
exports.copyFiles = (patterns, options) => ({
  plugins: [
    new CopyPlugin({
      patterns,
      options,
    }),
  ],
})

/**
 * Generate source maps for JavaScript
 */
exports.genSourceMaps = (type) => ({
  devtool: type,
})

/**
 * Do not include "node_modules" directory in bundle
 */
exports.ignoreNodeModules = (options) => ({
  externals: [nodeExternals(options)],
})

/**
 * Inject styles.
 * 1. Compiles Sass to CSS with sass-loader
 * 2. Runs PostCSS with Autoprefixer plugin
 * 3. Interprets @import and url() like import/require() and resolves them with css-loader
 * 4. Injects CSS into DOM with style-loader
 */
exports.injectStyles = ({
  cssLoaderOptions,
  postCSSLoaderOptions,
  sassLoaderOptions,
  styleLoaderOptions,
} = {}) => ({
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: 'style-loader',
            options: styleLoaderOptions,
          },
          {
            loader: 'css-loader',
            options: cssLoaderOptions,
          },
          {
            loader: 'postcss-loader',
            options: postCSSLoaderOptions,
          },
          {
            loader: 'sass-loader',
            options: sassLoaderOptions,
          },
        ],
      },
    ],
  },
})

/**
 * Inline images for development environment.
 * If images are too large, then emit images into output directory.
 */
exports.loadDevMedia = (
  exclude,
  include,
  options = { limit: 15000, name: '[name].[ext]' }
) => ({
  module: {
    rules: [
      {
        test: /\.(gif|jpe?g|mov|mp4|png)$/i,
        exclude,
        include,
        use: {
          loader: 'url-loader',
          options,
        },
      },
    ],
  },
})

/**
 * Load HTML file as string
 */
exports.loadHTMLAsString = (options) => ({
  module: {
    rules: [
      {
        test: /\.(ejs|html)$/i,
        loader: 'html-loader',
        options,
      },
    ],
  },
})

/**
 * Emit images into output directory.
 */
exports.loadMedia = (exclude, include, options = { name: '[name].[ext]' }) => ({
  module: {
    rules: [
      {
        test: /\.(gif|jpe?g|mov|mp4|png)$/i,
        exclude,
        include,
        use: {
          loader: 'file-loader',
          options,
        },
      },
    ],
  },
})

/**
 * Load SVGs as inline SVGs.
 */
exports.loadSVGs = (options) => ({
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: {
          loader: '@svgr/webpack',
          options,
        },
      },
    ],
  },
})

/**
 * Set free variable
 */
exports.setFreeVariable = (key, value) => {
  const env = {}
  env[key] = JSON.stringify(value)

  return {
    plugins: [new DefinePlugin(env)],
  }
}

/**
 * Set mode to determine which webpack optimizations to use
 */
exports.setMode = (mode) => ({
  mode,
})

/**
 * Setup development server with webpack-dev-server
 */
exports.setupDevServer = (options) => ({
  devServer: {
    ...options,
  },
})

/**
 * Setup HTML with html-webpack-plugin
 */
exports.setupHTML = (options) => ({
  plugins: [new HtmlWebpackPlugin({ ...options })],
})
