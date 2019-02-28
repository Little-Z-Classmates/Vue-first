const path = require('path')
const htmlWebpackPlugin = require( 'html-webpack-plugin' )
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    mode:'development',
    entry: path.join(__dirname,"/src/main.js"),
    output:{
        path:path.join(__dirname,"/dist"),
        filename:"bundle.js"
    },
    plugins:[
        new htmlWebpackPlugin({
            template:path.join(__dirname,'/src/index.html'),
            filename:'index.html'
        }),
        new VueLoaderPlugin(),
        new ExtractTextPlugin('style.css')
    ],
    module:{
        rules:[
            // { test: /\.css$/, use: ['style-loader', 'css-loader'] }, // 处理 CSS 文件的 loader
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }, // 处理 less 文件的 loader
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }, // 处理 scss 文件的 loader
            { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=7631&name=[hash:8]-[name].[ext]' }, // 处理 图片路径的 loader
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' }, // 处理 字体文件的 loader
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/}, // 配置 Babel 来转换高级的ES语法
            { test: /\.css$/, use: ExtractTextPlugin.extract({ use: ['css-loader'] })},
            { test: /\.vue$/,use: ['vue-loader'],exclude: /node_modules/ }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
    },
}