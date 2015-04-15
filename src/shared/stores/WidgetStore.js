import { Store } from 'flummox';
import { Map } from 'immutable';

class WidgetStore extends Store {
  constructor({ wisgetActions }) {
    super();

    this.state = {
      file: new Map(),
      transcript: new Map()
    };
  }

  getFile(){
    return this.state.file;
  }

  getTranscript(){
    return this.state.transcript;
  }
}

export default WidgetStore
