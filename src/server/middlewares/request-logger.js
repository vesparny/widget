'use strict';

import logger from '../logger';

export default () => {
  return (req, res, next) => {
    logger.info([
      req.url,
      req.method,
      res.statusCode]
      .join(' - '));
    return next();
  };
};
