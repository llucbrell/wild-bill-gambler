const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/game/index.js',
    mode: 'production',
    output: {
        path: path.resolve(__dirname,  '../build/src/game'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/game/index.html'
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: "src/game/static", to: "static/" }
        ],
    })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    }
}