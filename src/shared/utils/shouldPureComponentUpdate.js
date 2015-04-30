'use strict';

import shallowEqual from './shallowEqual';

export default function shouldPureComponentUpdate(nextProps, nextState) {
  return !shallowEqual(nextProps, this.props) ||
         !shallowEqual(nextState, this.state);
}
