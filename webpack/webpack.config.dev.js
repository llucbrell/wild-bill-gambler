const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/game/index.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname,  '../build/game'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, '../build/game'),
        compress: true,
        port: 9000,
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
                            outputPath: 'static/',
                            useRelativePath: true 
                        }
                    }
                    
                ]
            }
        ]
    }
}