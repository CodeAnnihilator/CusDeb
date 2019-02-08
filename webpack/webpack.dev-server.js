import webpack from 'webpack';
import webpackDevServer from 'webpack-dev-server';

import webpackConfig from './webpack.development.config';
import {port, host, prefix} from '../config/main';

const options = {
  contentBase: false,
  hot: true,
  host: host,
  quiet: true,
  publicPath: '/app/',
  historyApiFallback: {
	rewrites: [
		{ from: new RegExp('/' + prefix), to: '/app/'}
	]
  },
}

webpackDevServer.addDevServerEntrypoints(webpackConfig, options)

const compiler = webpack(webpackConfig)
const server = new webpackDevServer(compiler, options)

server.listen(port, host);