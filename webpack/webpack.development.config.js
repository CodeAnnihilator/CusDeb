import webpack from 'webpack'
import path from 'path'
const WebpackNotifierPlugin = require('webpack-notifier');

import baseConfig from './webpack.base.config.js'

export default {
    ...baseConfig,
    mode: 'development',
    devtool: 'eval-source-map',
    output: {
      ...baseConfig.output,
      filename: '[name].[hash].js',
      chunkFilename: '[name].[hash].js',
    },
    module: {
      rules: [
        ...baseConfig.module.rules,
        {
          test: /\.(css|scss)$/,
          use: [
            { loader: 'style-loader' },
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[name]__[local]__[hash:base64:5]'
              }
            },
            {
              loader: 'sass-loader',
              options: {
                includePaths: [path.resolve(__dirname, "../src")]
              }
            }
          ]
        }
      ]
    },
    plugins: [
      ...baseConfig.plugins,
      new webpack.HotModuleReplacementPlugin(),
      new WebpackNotifierPlugin({
        title: 'CusDeb',
      }),
    ],
}