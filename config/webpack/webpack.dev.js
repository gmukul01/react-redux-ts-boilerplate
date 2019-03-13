const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

const DIST = path.resolve(__dirname, '../../dist');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: DIST,
        inline: true,
        hot: true,
        historyApiFallback: true,
        overlay: true,
        stats: { children: false }
    }
});
