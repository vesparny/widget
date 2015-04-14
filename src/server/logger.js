'use strict';

import bunyan from 'bunyan';
import bformat from 'bunyan-format';
import config from '../config';

const formatOut = bformat({
  outputMode: 'long'
});

export default bunyan.createLogger({
  name: 'app',
  streams: [{
    level: config.logLevel,
    stream: formatOut
  },
  {
    level: config.logLevel,
    type: 'rotating-file',
    path: config.logfile,
    period: '1d',
    count: 3
  }],
  serializers: bunyan.stdSerializers
});
