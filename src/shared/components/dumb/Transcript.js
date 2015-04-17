'use strict';

import React from 'react';
import Line from './Line';
import Scroll from '../smart/Scroll';
import shallowEqual from 'react/lib/shallowEqual';

class Transcript extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    return !shallowEqual(this.props, nextProps) ||
           !shallowEqual(this.state, nextState);
  }

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
                <Scroll transcript={this.props.transcript} currentTime={this.props.currentTime}/>
              </div>
            </div>
          </div>
        </div>
      </div>
     );
  }
}

export default Transcript
