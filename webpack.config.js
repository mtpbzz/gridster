'use strict';

var webpack = require('webpack'),
    path = require('path');

var srcPath = path.join(__dirname, './src'),
    distPath = path.join(__dirname, './build');

var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  watch: true,
  cache: true,
  devtool: '#cheap-module-eval-source-map',
  context: srcPath,
  entry: {
    app: ['./main.js'],
  },
  output: {
    path: distPath,
    publicPath: "/build/",
    filename: 'app.js',
  },
  resolve: {
    modules: ["node_modules"],
    extensions: ['.json', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.js|\.jsx$/,
        exclude: /(node_modules)/,
        use: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "sass-loader" // compiles Sass to CSS
        }]
      },
      {
        test: /\.css$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }]
      },
      {
        test: /\.md$/,
        use: [{
          loader: "html-loader"
        }, {
          loader: "markdown-loader"
        }]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      }
    ]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};
