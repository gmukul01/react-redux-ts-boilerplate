const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/index',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js',
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            minify: {
                collapseWhitespace: true,
                removeComments: true,
            },
            template: './public/index.html',
        }),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        contentBase: './dist',
        hot: true,
    },
};
