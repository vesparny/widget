'use strict';

import { ensureAuth } from '../middlewares';

export default function (router) {
  router.get('/user/me', (req, res) => {
    res.send(req.path);
  });

  router.get('/user/401', ensureAuth(), (req, res) => {
    res.send({});
  });
}
