const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    mode: 'development',
    entry: './src/js/employeeList.js',
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

    devServer: {
        historyApiFallback: true,
        inline:true,
        contentBase: path.join(__dirname, "./src/"),
        compress: true,
        port: 3000
    },

    plugins: [
        new htmlWebpackPlugin({
            minify: {
                removeAttributeQuotes: true,
            },
            hash: true,
            // //
            template: './src/index.html',
            alwaysWriteToDisk: true,
        }),
    ]
}
