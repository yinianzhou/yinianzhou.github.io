/**
 * Created by ZhouYinian on 2017/9/7.
 */
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var proxy = require('http-proxy-middleware')

new WebpackDevServer(webpack(config), {

    contentBase: __dirname,
    inline:true,
    hot: true,
    compress: true,
    historyApiFallback: true,
    watchOptions: {
        ignored: /node_modules/,
    },
    stats: {
        modules: false,
        chunks: false
    },
    setup(app) {
        app.use('/dweb/*', proxy({
            target: 'https://www.easy-mock.com/mock/593611b991470c0ac101d474',
            secure: false
        }))
    }
}).listen(3011, function (err, result) {
    if (err) {
        return console.log(err);
    }

    console.log(`Listening at http://localhost:3011/`);
});