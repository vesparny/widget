'use strict';

const env = process.env.NODE_ENV || 'development';

import development from './development';
import production from './production';

let config = {development, production};

export default config[env];
