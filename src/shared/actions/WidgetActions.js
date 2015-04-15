import { Actions } from 'flummox';
import ApiUtils from '../utils/ApiUtils';

class WidgetActions extends Actions {
  getFile(){
    return ApiUtils.get();
  }

  getTranscript(){
    return ApiUtils.get();
  }
}

export default WidgetActions
