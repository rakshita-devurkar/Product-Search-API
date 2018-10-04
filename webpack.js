'use strict';
const Path = require('path');


module.exports = {
    entry: Path.join(__dirname, '/src/views/index.js'),
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        path: Path.resolve(__dirname),
        filename: './assets/index.js'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'env']
            }
        }]
    }
};