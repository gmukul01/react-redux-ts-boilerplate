const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');

const DIST = path.resolve(__dirname, '../../dist');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-source-map',
    resolve: {
        alias: {
            'react-dom': '@hot-loader/react-dom'
        }
    },
    devServer: {
        contentBase: DIST,
        inline: true,
        hot: true,
        historyApiFallback: true,
        overlay: true,
        stats: { children: false }
    },
    plugins: [new webpack.NamedModulesPlugin(), new webpack.HotModuleReplacementPlugin()]
});
