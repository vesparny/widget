'use strict';

import React from 'react';
import Video from '../dumb/Video';
import Transcript from '../dumb/Transcript';
import connectToStores from 'flummox/connect';


class Widget extends React.Component {

  componentDidMount(){
    const widgetActions = this.props.flux.getActions('widget')
    widgetActions.getFile();
    widgetActions.getTranscript();
  }

  render() {
    const { file, transcript} = this.props;
    console.log(transcript);
    const video = this.props.file.get('_id') ? <Video file={this.props.file}/> : '';
    return (
      <div className="Widget-container wrapper-widget-video ng-scope w600">
        <div className="wrapper">
          <div className="main-content">
            <div id="top-nav">
              <a ng-click="gotoWidgetSearchPage()" className="btn-back u-pullLeft">Back</a>
              <div className="wrapper-input u-pullLeft">
                <label for="search" className="icon icon-search"></label>
                <input type="text" placeholder="Search now" autocomplete="off" name="search"
                  className="input-search ng-pristine ng-untouched ng-invalid ng-invalid-required" />
                <div ng-click="resetSearch()" className="Btn--close icon-close"></div>
              </div>
            </div>
          </div>
        </div>
        {video}
        <Transcript />
      </div>
     );
  }
}

Widget = connectToStores(Widget, {
  widget: (store) => {
    return {
      file: store.getFile(),
      transcript: store.getTranscript()
    }
  }
});

export default Widget
