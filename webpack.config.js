/**
 * Created by ZhouYinian on 2017/9/6.
 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const nodeEnv = process.env.NODE_ENV || 'development';
const __PROD__ = nodeEnv === 'production';
console.log("当前运行环境：", nodeEnv === 'production' ? '生产' : '开发');

const webpackConfig = {
    name: 'client',
    target: 'web',
    devtool: __PROD__ ? 'source-map' : 'inline-source-map',

    resolve: {
        extensions: ['.js', '.jsx', '.less', '.scss', '.css'],
        modules: [
            path.join(__dirname, './src'),
            'node_modules'
        ]
    },
    module: {}
};
const APP_ENTRY_PATHS = [
    'babel-polyfill',
    './src/main.js'
];
webpackConfig.entry = {
    app: APP_ENTRY_PATHS,
    vendor: [
        'react',
        'react-dom',
        'react-redux',
        'react-router-dom',
        'redux'
    ]
};

webpackConfig.output = {
    filename: `[name].[hash:7].js`,
    path: path.join(__dirname, ''),
    publicPath: '',
    chunkFilename: '[name].[hash:7].js'
};

webpackConfig.plugins = [
    new webpack.optimize.CommonsChunkPlugin({
        // vendor 的意义和之前相同
        // manifest文件是将每次打包都会更改的东西单独提取出来，保证没有更改的代码无需重新打包，这样可以加快打包速度
        names: ['vendor', 'manifest'],
        // 配合 manifest 文件使用
        minChunks: Infinity
    }),
    new CleanWebpackPlugin(['./vendor.*.js','./app.*.js','./manifest.*.js'], {
        verbose: true,
        dry: false
    }),
    new HtmlWebpackPlugin({
        template: __dirname + `/tpl/index.html`,
        hash: false,
        favicon: './src/static/favicon.ico',
        filename: 'index.html',
        inject: 'body',
        minify: {
            collapseWhitespace: true
        }
    }),
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify(nodeEnv)
        }
    }),
];


if (__PROD__) {
    webpackConfig.plugins.push(
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                unused: true,
                dead_code: true,
                warnings: false
            }
        })
    )

} else {
    webpackConfig.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )
}

webpackConfig.module.rules = [
    {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: [
            path.resolve(__dirname, "src")
        ],
        loader: "babel-loader",
    },
    {
        test: /\.(less|css)$/,
        use: ["style-loader", "css-loader", "postcss-loader", "less-loader"]
    }, {
        test: /\.(png|jpg|gif|md)$/,
        use: ['url-loader?limit=10000&name=images/[md5:hash:base64:10].[ext]']
    }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: ['url-loader?limit=10000&mimetype=image/svg+xml']
    }
];

module.exports = webpackConfig;