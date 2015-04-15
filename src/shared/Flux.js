import { Flummox } from 'flummox';
import WidgetActions from './actions/WidgetActions';
import WidgetStore from './stores/WidgetStore';
import TimeStore from './stores/TimeStore';

class Flux extends Flummox {
  constructor() {
    super();

    const widgetActions = this.createActions('widget', WidgetActions);
    this.createStore('widget', WidgetStore, {widgetActions});
    this.createStore('time', TimeStore, { widgetActions });

    this.on('dispatch', function (payload) {
      console.log('dispatching -> ',  payload);
    });
    this.on('error', function (err) {
      console.error(err.stack);
    });
  }
}

export default Flux
