import webpack from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
    entry: ['./src/index.js'],
    mode: 'development',
    devtool: 'eval-source-map',
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js',
        publicPath: '/'
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
            template: 'src/index.html',
            inject: 'body'
        }),
        new webpack.HotModuleReplacementPlugin(),
    ]
}