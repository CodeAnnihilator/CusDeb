import webpack from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

import { srcPath, publicPath } from '../config/paths'

export default {
  entry: [path.resolve(srcPath, 'root/index.js')],
  resolve: {
    modules: [srcPath, 'node_modules'],
    extensions: ['.js', '.jsx', '.json']
  },
  output: {
    path: path.resolve('dist'),
    publicPath: '/'
  },
  stats: {
    entrypoints: false,
    children: false,
    modules: false
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(publicPath, 'index.html'),
      inject: 'body'
    })
  ]
}