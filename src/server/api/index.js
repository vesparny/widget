'use strict';

import express from 'express';
import auth from './auth';
import file from './file';

const apiRouter = express.Router();

auth(apiRouter);
file(apiRouter);

export default apiRouter
