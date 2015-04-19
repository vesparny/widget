'use strict';

import React from 'react';
import Line from './Line'

class ScrollBody extends React.Component {

  render() {
    const elements = this.props.records.toJS();
    const lines = [];
    let key = 0;
    for (let i = this.props.initilaElement; i <= this.props.initilaElement + this.props.visibleElements; i+=1, key+=1){
      var record = elements[i];
      for (key in record) {
        lines.push(<Line
          line={record[key]}
          key={key}
          i={i}
          itemHeight={this.props.itemHeight}
          currentTime={this.props.currentTime}
          />);
        }
    }
    const lastLineStyles = {
      position: 'relative',
      height: elements.length * this.props.itemHeight + 'px'
    }
    lines.push(<div style={lastLineStyles} ></div>);
      return (
        <div>
          {lines}
        </div>
      )
  }
}

export default ScrollBody
