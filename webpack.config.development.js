'use strict';
/*eslint-disable */
var path = require('path');
var webpack = require('webpack');
var address = require('network-address')();
var hotPort = 3002;
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'eval',
  devServer: true,
  debug: true,
  entry: [
    'webpack-dev-server/client?http://' + address + ':' + hotPort,
    'webpack/hot/dev-server',
    './src/client/app.js'
  ],
  output: {
    path: path.join(__dirname, '/public/build/'),
    filename: 'bundle.js',
    publicPath: 'http://' + address + ':' + hotPort + '/build/'
  },
  resolve: {
    extensions: ['', '.js', 'json']
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel'
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  _hotPort: hotPort,
  _address: address
};
