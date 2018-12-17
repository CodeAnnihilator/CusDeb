import webpack from 'webpack'

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
          test: /\.scss$/,
          use: [
            { loader: 'style-loader' },
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[name]__[local]__[hash:base64:5]'
              }
            },
            { loader: 'sass-loader' }
          ]
        }
      ]
    },
    plugins: [
      ...baseConfig.plugins,
      new webpack.HotModuleReplacementPlugin(),
    ]
}