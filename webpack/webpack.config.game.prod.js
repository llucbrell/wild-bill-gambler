const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
        })
    ],
    module: {
        rules: [
            {
                test: /\.(jpg|png|gif|ico)$/,
                use: 
                [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'src/game/static/',
                            useRelativePath: true 
                        }
                    }
                    
                ]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    }
}