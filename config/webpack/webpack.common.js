const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const DIST = path.resolve(__dirname, '../../dist');
const ENTRY = path.resolve(__dirname, '../../src/index');
const INDEX_HTML = path.resolve(__dirname, '../../public/index.html');
const TSCONFIG = path.resolve(__dirname, '../tsconfig.json');

module.exports = {
    entry: ENTRY,
    output: {
        path: DIST,
        filename: '[name].[hash].js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'stylelint-custom-processor-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: INDEX_HTML,
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        }),
        new ForkTsCheckerWebpackPlugin({ tsconfig: TSCONFIG }),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};
