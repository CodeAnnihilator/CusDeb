import webpack from 'webpack'
import path from 'path'
import autoprefixer from 'autoprefixer'

import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'

import baseConfig from './webpack.base.config.js'

export default {
    ...baseConfig,
    mode: 'production',
    devtool: 'source-map',
    output: {
      ...baseConfig.output,
      filename: '[name].[contenthash].js',
      chunkFilename: '[name].[contenthash].js',
    },
    stats: {
      entrypoints: false,
      children: false,
      modules: false
    },
    module: {
      rules: [
        ...baseConfig.module.rules,
        {
          test: /\.(css|scss)$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: true
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
            { loader: 'sass-loader' },
          ]
        }
      ]
    },
    performance: {
      hints: false
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          default: false,
          vendors: false,
          vendor: {
            name: 'vendor',
            chunks: 'all',
            test: /node_modules/,
            priority: 20,
          },
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            priority: 10,
            reuseExistingChunk: true,
            enforce: true
          }
        }
      }
    },
    plugins: [
      ...baseConfig.plugins,
      new CleanWebpackPlugin(['dist']),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.ModuleConcatenationPlugin(),
      new webpack.HashedModuleIdsPlugin(),
      new OptimizeCSSAssetsPlugin(),
      new MiniCssExtractPlugin({
        filename: '[name].[hash].css',
        chunkFilename: '[id].[hash].css',
      })
    ]
}