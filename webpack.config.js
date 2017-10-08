//var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bootstrap-helpers.js'
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