'use strict';

import fileService from '../services/file'
var phantom = require('phantom');
export default function(router) {
  router.get('/file', (req, res) => {
    res.send(fileService.getFile());
  });

  router.get('/fileTranscript', (req, res) => {
    res.send(fileService.getFiletranscript());
  });

  router.get('/pdf', (req, res) => {
    phantom.create(function(ph) {
      ph.createPage(function(page) {
        page.open("http://www.google.com", function(status) {
          page.render('public/google.pdf', function() {

            console.log('Page Rendered');
            ph.exit();
            res.download('google.pdf', 'pageeee');
          });
        });
      });
    });
    //res.send({});
  });
}
