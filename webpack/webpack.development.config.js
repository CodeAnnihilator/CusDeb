import webpack from 'webpack'
import path from 'path'
import WebpackNotifierPlugin from 'webpack-notifier';
import SimpleProgressWebpackPlugin from 'simple-progress-webpack-plugin';
import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin';

import {libPath} from '../config/paths';

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
                loader: 'postcss-loader',
                options: {
                    config: {
                        path: path.resolve(__dirname),
                    }
                },
            },
            {
              loader: 'sass-loader',
              options: {
                includePaths: [path.resolve(__dirname, "../src")]
              }
            },
          ]
        }
      ]
    },
    plugins: [
	  ...baseConfig.plugins,
	  new webpack.HotModuleReplacementPlugin(),
	  new FriendlyErrorsWebpackPlugin(),
	  new SimpleProgressWebpackPlugin({format: 'minimal'}),
      new WebpackNotifierPlugin({
		  skipFirstNotification: true,
		  title: 'CusDeb',
	  }),
	  new webpack.DllReferencePlugin({
		context: __dirname,
		manifest: require(path.resolve(libPath, 'library.json'))
	  })
    ],
}