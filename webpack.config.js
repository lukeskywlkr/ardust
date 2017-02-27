var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, "src/javascript/app.js"),
    output: {
        path: path.resolve(__dirname, "public/built"),
        filename: 'bundle.js',
        publicPath: 'http://localhost:8080/built/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }, {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }, {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            }, {
                test: /\.jsx?$/, // Match both .js and .jsx files
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ['react']
                }
            }
        ]
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    target: "electron"
}
