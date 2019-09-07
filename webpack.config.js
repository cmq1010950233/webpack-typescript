const path = require('path');
const WebpackHtmlPlugin = require('html-webpack-plugin');
module.exports = {
    // 入口 
    entry: { 
        entry: './dome.ts',
    },
    devtool: 'inline-source-map',
    // 出口
    output: {
        //绝对路径
        path: path.resolve(__dirname,'dist'),
        filename:'[name].js'
    },
    // 模块
    module: {
        rules: [
            {
              test: /\.tsx?$/,
              use: 'ts-loader',
              exclude: /node_modules/
            }
          ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
      },
    //插件
    plugins: [
        new WebpackHtmlPlugin({

            template:'./index.html',
   
            filename:'./index.html'
   
         }),
    ],
    //开发服务
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        host: 'localhost',
        compress: true, //服务端是否启用压缩
        port:8080
    }
}
