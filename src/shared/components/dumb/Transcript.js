'use strict';

import React from 'react';
import shouldPureComponentUpdate from '../../utils/shouldPureComponentUpdate';

class Transcript extends React.Component {

  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    return (
      <div className="tab-video">
        <div className="scroll-mobile">
          <div alignment="left">
            <ul className="Tabs u-cf Tabs--alignleft">
              <li className="selected Tab-li active">
                <a className="Tab-anchor">Transcript</a>
              </li>
            </ul>
            <div className="Tabs-tabContent">
              <div className="Tabs-pane active" heading="Transcript">
              {this.props.children}
              </div>
            </div>
          </div>
        </div>
      </div>
     );
  }
}

export default Transcript;
