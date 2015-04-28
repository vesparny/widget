'use strict';

const env = process.env.NODE_ENV || 'development';

import http from 'http';
import path from 'path';
import cors from 'cors';
import React from 'react';
import Router from 'react-router';
import FluxComponent from 'flummox/component';
import Flux from '../shared/Flux';
import routes from '../shared/routes';
import address from 'network-address';
import api from './api';
import logger from './logger';
import { CustomError } from './errors';
import app from './app';

const webpackConfigDev = require('../../webpack.config.development');

let js = `http://${webpackConfigDev._address}:${webpackConfigDev._hotPort}/build/bundle.js`;

if (app.get('env') === 'development') {
  // run webpack dev server
  require('../../dev-tools');
}

if (app.get('env') === 'production') {
  const webpackBuildStats = require('../../public/build/webpackBuildStats');
  js = `/build/bundle-${webpackBuildStats.hash}.min.js`; // jscs:disable
}

// register apis
app.use('/api', api);

// react-router will take care of the rest
app.use((req, res) => {
  const flux = new Flux();
  let appString;

  Router.run(routes, req.path, function (Handler, state) {
    let isNotFound = state.routes.some(route => route.name === 'not-found');
    res.status(isNotFound ? 404 : 200);
    try {
    appString = React.renderToString(
      <FluxComponent flux={flux}>
        <Handler {...state} />
      </FluxComponent>);
    }catch (err) {
      throw new CustomError({
        message: err.message
      });
    }
    res.render('index', {
      js: js,
      appString: appString
    });
  });
});

app.use((err, req, res, next) => {/* eslint no-unused-vars:0 */
  logger.error({
    err: err.stack
  });
  res.status(err.statusCode);
  res.send({
    error: err.message || 'Unexpected error'
  });
});

app.listen(app.get('port'), () => {
  logger.info(`Demo app is listening on ${address()}:${app.get('port')} env=${env}`); // jscs:disable
});
