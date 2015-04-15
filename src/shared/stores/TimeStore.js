'use strict';

import { Store } from 'flummox';
import { Map, List } from 'immutable';
import _ from 'lodash';

class TimeStore extends Store {
  constructor({ widgetActions }) {
    super();

    this.state = {
      currenTime: 0
    };
    this.register(widgetActions.updateTime, this._updateTime);
  }

  _updateTime (time) {
    this.setState({
      currentTime: time
    });
  }

  getCurrentTime () {
    return this.state.currentTime;
  }
}

export default TimeStore
