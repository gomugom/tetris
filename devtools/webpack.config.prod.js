var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var ExtractScss = new ExtractTextPlugin('tetris.css');

var _PATH = path.resolve(__dirname, '../src');
var _PATH_OUTPUT = path.resolve(__dirname, '../dist');

module.exports = {
    progress: true,
    devtool: 'source-map',
    context: _PATH,
    entry: {
        index: [
            path.resolve(_PATH, 'main')
        ]
    },
    output: {
        path: _PATH_OUTPUT,
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.scss$/,
            include: [ _PATH ],
            loader: ExtractScss.extract('style', 'css?sourceMap!sass')
        }]
    },
    resolve: {
        root: [ _PATH ],
        extensions: [ '', '.js' ]
    },
    node: { fs: "empty" },
    plugins: [
        ExtractScss,
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin()
    ]
};
