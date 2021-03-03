const {merge} =require('webpack-merge')
const baseConfig = require('./webpack.base')
const {ESBuildPlugin} = require('esbuild-loader');
const prodConfig = {
    mode = "development",
    module:{
        rules: [
            {
                test: /\.css$/,
                loader: 'esbuild-loader',
            }
        ],
        plugins: [
            +     new ESBuildPlugin()
                ]
    }
}

module.exports = merge(baseConfig, prodConfig)