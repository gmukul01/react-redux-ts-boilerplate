const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-source-map',
    resolve: {
        alias: {
            'react-dom': '@hot-loader/react-dom'
        }
    },
    devServer: {
        hot: true,
        overlay: true,
        historyApiFallback: true,
        stats: { children: false }
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
});
