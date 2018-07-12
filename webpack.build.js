const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const uglify = require('uglifyjs-webpack-plugin');
module.exports = {
    mode: 'production',
    entry: {
        employeeList: './src/js/employeeList.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:  ['babel-loader','eslint-loader'],
            }
        ]
    },

    plugins: [
        new uglify(),
        new htmlWebpackPlugin({
            minify: {
                removeAttributeQuotes: true,
            },
            hash: true,
            template: './src/index.html'
        }),
    ]
}
