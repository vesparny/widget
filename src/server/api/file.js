'use strict';

import fileService from '../services/file'

export default function (router) {
  router.get('/file', (req, res) => {
    console.log(fileService);
    res.send(fileService.getFile());
  });
}
