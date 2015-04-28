'use strict';

import React from 'react'; /* eslint no-unused-vars:0 */
import {Route, DefaultRoute, NotFoundRoute} from 'react-router';
import App from './components/App';
import Widget from './components/smart/Widget';
import NotFound from './components/Notfound';

let Routes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute handler={Widget} />
    <NotFoundRoute name="not-found" handler={NotFound} />
  </Route>
);

export default Routes;
