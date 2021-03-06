const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const SRC = path.resolve(__dirname, '../../src');
const DIST = path.resolve(__dirname, '../../dist');
const ENTRY = path.resolve(__dirname, '../../src/index');
const INDEX_HTML = path.resolve(__dirname, '../../public/index.html');

module.exports = {
    entry: ['@babel/polyfill', ENTRY],
    output: {
        path: DIST,
        filename: '[name].[hash].js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
        symlinks: false,
        plugins: [new TsconfigPathsPlugin()]
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: '@svgr/webpack',
                        options: {
                            icon: true
                        }
                    }
                ]
            },
            {
                test: /\.tsx?$/,
                include: SRC,
                exclude: [/node_modules/, /\.spec.tsx?$/, /\.test.tsx?$/, /__snapshots__/, /__tests__/],
                use: [
                    {
                        loader: 'thread-loader',
                        options: {
                            workers: 2,
                            workerParallelJobs: 50
                        }
                    },
                    'babel-loader',
                    'stylelint-custom-processor-loader'
                ]
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
        new ForkTsCheckerWebpackPlugin(),
        new CircularDependencyPlugin({
            failOnError: true
        }),
        new webpack.DefinePlugin({
            API_BASE_URL: JSON.stringify('https://my-json-server.typicode.com/gmukul01/demo')
        })
    ]
};
