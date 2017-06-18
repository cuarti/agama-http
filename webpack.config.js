
const webpack = require('webpack');
const {resolve} = require('path');
const {CheckerPlugin} = require('awesome-typescript-loader');


module.exports = {

    devtool: 'source-map',

    context: resolve(__dirname, 'src'),

    entry: './index.js',

    output: {
        filename: 'agama_http.js',
        path: resolve(__dirname, 'dist')
    },

    resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts', '.js']
    },

    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'awesome-typescript-loader'
            }
        ]
    },

    plugins: [
        new CheckerPlugin(),
        // new webpack.NamedModulesPlugin()
    ]

};
