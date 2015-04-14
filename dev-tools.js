'use strict';

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config.development.js');
var path = require('path');
import logger from './src/server/logger';

new WebpackDevServer(webpack(webpackConfig), {
  publicPath: webpackConfig.output.publicPath,
  hot: true,
  stats: {
    colors: true
  },
  historyApiFallback: true
}).listen(webpackConfig._hotPort, function (err) {
  if (err) {
    throw err;
  }
  logger.info('webpack dev server listening on %s', webpackConfig._hotPort);
});
