import path from 'path';
import webpack from 'webpack';

import {libPath} from '../config/paths';

export default {
	context: process.cwd(),
	resolve: {
		extensions: ['.js', '.jsx', '.json', '.less', '.css'],
		modules: [__dirname, 'node_modules']
	},
	mode: "development",
	entry: {
		library: [
			'react',
			'redux',
			'reselect',
			'classnames',
			'history',
			'i18next',
			'moment',
			'react-bootstrap',
		]
	},
	stats: 'errors-only',
	output: {
		filename: '[name].dll.js',
		path: libPath,
		library: '[name]'
	},
	plugins: [
		new webpack.DllPlugin({
			name: '[name]',
			path: path.resolve(libPath, '[name].json')
		})
	]
};