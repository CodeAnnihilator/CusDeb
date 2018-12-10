import webpack from 'webpack'
import webpackDevServer from 'webpack-dev-server'

import webpackConfig from './webpack.config'
import { port, host } from '../config/main'

const options = {
  contentBase: '../dist',
  hot: true,
  host: 'localhost',
  historyApiFallback: true
}

webpackDevServer.addDevServerEntrypoints(webpackConfig, options)

const compiler = webpack(webpackConfig)
const server = new webpackDevServer(compiler, options)

server.listen(port, host, () => console.log(`webpack dev server listening on ${host}:${port}`))