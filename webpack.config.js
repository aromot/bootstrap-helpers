//var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bootstrap-helpers.js',
        library: 'bootstrapHelpers',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [
            {
                test: /\.hbs\.html?$/,
                loader: "handlebars-loader"
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.css', '.html', '.htm', '.hbs.html', '.hbs.htm']
    },
    //plugins: plugins,
    node: {
        fs: "empty"
    }
};