const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/server/index.js',
    mode: 'production',
    output: {
        path: path.resolve(__dirname,  '../build/src/server'),
        filename: 'index.js'
    },
    plugins: [
        
    ],
    externals: { 'express': 'commonjs express' },

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