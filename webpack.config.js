
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HTMLwebpackPlugin = require('html-webpack-plugin');
let webpack = require('webpack');
const path = require('path'); 

const config = {
     entry: [
     __dirname + '/dev/index.js',
      'webpack-hot-middleware/client', 
     'webpack/hot/dev-server'
     ],
    output: {
      path: '/',
      filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /(node_modules|bower_components)/,
          },
            {
      test: /\.scss$/,
      exclude: /(node_modules|bower_components)/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        // Without map case
         // use: [
         //    'css-loader',
         //    'sass-loader'
         //    ]
            use: [
            'css-loader?sourceMap!',
            'sass-loader?sourceMap!'
            ]
      })
    }
         ]
    },
       plugins: [
      new ExtractTextPlugin({
      filename: 'styles.css',
      disable: false, 
      allChunks: true}), 
      new HTMLwebpackPlugin({
        template: './dev/index.template.html',
        inject: true
      }),
       new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    ],
    resolve: {
      extensions: ['.js','.jsx','.css', '.scss']
    },
    //  devServer: {
    //     compress: false,
    //     port: 9009
    // }
};

module.exports = config;

