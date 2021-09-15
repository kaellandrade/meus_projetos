const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './public')
    },
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, './public'),
        port: 3002,
        index: "index.html",
        historyApiFallback: true
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: { loader: 'babel-loader' },
            exclude: /node_modules/,
        }, {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader'] // a ordem inporta aqui direita para esquerda
        }, {
            test: /\.woff|.woff2|.ttf|.eot|.svg|.png|.jpg*.*$/,
            use: 'file-loader'
        }]
    },

    resolve: {
        extensions: ['.js', '.json', '.jsx', '.css']
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'index.css'
        })
    ],

}