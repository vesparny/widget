'use strict';

import path from 'path';

export default {
  port: process.env.NODE_PORT || 3000,
  logLevel: 'info',
  logfile: path.join(process.cwd(), 'logs/app.log')
};
