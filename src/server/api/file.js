'use strict';

import fileService from '../services/file'

export default function(router) {
  router.get('/file', (req, res) => {
    res.send(fileService.getFile());
  });

  router.get('/fileTranscript', (req, res) => {
    res.send(fileService.getFiletranscript());
  });
}
