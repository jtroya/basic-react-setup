const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

const port = process.env.PORT || 3000;

module.exports = {
    entry: [
        { main: './src/index.js' },
        'react-hot-loader/patch'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
          { 
              test: /\.js|jsx$/,
              exclude: /node_modules/,
              use: {
                  loader: "babel-loader"
              }
          },
          {
              test: /\.scss$/,
              use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader' ]
          }
        ]
    },
    plugins: [
        new CleanWebpackPlugin('dist', {} ),
        new MiniCssExtractPlugin(
        {
            filename: 'style.[contenthash].css'
        }),
        new HtmlWebpackPlugin(
        {
            inject: false,
            hash: true,
            template: './public/index.html',
            filename: 'index.html'
        }),
        new WebpackMd5Hash(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        host: 'localhost',
        port: port,
        historyApiFallback: true,
        open: true,
        hot: true
    }
};
