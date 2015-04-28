'use strict';

import { Actions } from 'flummox';
import ApiUtils from '../utils/ApiUtils';

class WidgetActions extends Actions {

  getFile() {
    return ApiUtils.get('api/file');
  }

  getTranscript() {
    return ApiUtils.get('api/fileTranscript');
  }

  updateTime(time) {
    return time;
  }
}

export default WidgetActions;
