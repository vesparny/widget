'use strict';

import React from 'react';
import Router from 'react-router';
import routes from '../shared/routes';
import FluxComponent from 'flummox/component';
import Flux from '../shared/Flux';
import attachFastClick from 'fastclick';

// Remove 300ms tap delay on mobile devices
attachFastClick(document.body);

// Expose globally
window.React = React;

// Initialize flux
const flux = new Flux();

const router = Router.create({
  routes: routes,
  location: Router.HistoryLocation
});

router.run((Handler, state) => {
  React.render(
    <FluxComponent flux={flux}>
      <Handler {...state} />
    </FluxComponent>,
    document.getElementById('root'));
});
