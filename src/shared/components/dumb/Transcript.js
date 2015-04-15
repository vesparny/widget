'use strict';

import React from 'react';

class Transcript extends React.Component {
  render() {
    return (
      <div className="tab-video">
        <div className="scroll-mobile">
          <div alignment="left" className="ng-isolate-scope">
            <ul className="Tabs u-cf Tabs--alignleft">
              <li className="selected Tab-li ng-scope active">
                <a className="Tab-anchor ng-binding" ng-click="select(pane)">Transcript</a>
              </li>
            </ul>
            <div className="Tabs-tabContent">
              <div className="Tabs-pane ng-scope ng-isolate-scope active" heading="Transcript">
                <div id="transcript" className="transcript ng-scope">
                text here
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     );
  }
}

export default Transcript
