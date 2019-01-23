import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import {srcPath, publicPath} from '../config/paths';

export default {
	entry: [path.resolve(srcPath, 'root/index.tsx')],
	resolve: {
		modules: [srcPath, 'node_modules'],
		extensions: ['.js', '.json', '.ts', '.tsx']
	},
	output: {
		path: path.resolve('dist'),
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				use: [
					{
					loader: 'babel-loader',
					options: { plugins: ['react-hot-loader/babel'] }
					},
					'ts-loader'
				]
			},
			{
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'dist/assets/'
					}
				}]
			},
			{
				test: /\.ts?x/,
				enforce: 'pre',
				exclude: /node_modules/,
				use: [
					{
						loader: 'tslint-loader',
						options: {
                            typeCheck: true,
                        }
					}
				]
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