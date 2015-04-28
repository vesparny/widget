'use strict';

import { CustomError } from '../errors';

export default () => {
  return () => {
    throw new CustomError({
      message: 'not authorized',
      statusCode: 401
    });
  };
};

// jscs:disable
/*
import moment from 'moment';

function ensureAuthenticated(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send({ message: 'Please make sure your request has an Authorization header' });
  }
  var token = req.headers.authorization.split(' ')[1];
  var payload = jwt.decode(token, config.TOKEN_SECRET);
  if (payload.exp <= moment().unix()) {
    return res.status(401).send({ message: 'Token has expired' });
  }
  req.user = payload.sub;
  next();
}
*/
