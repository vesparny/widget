'use strict';

import React from 'react';
import Label from './Label';
import shouldPureComponentUpdate from '../../utils/shouldPureComponentUpdate';
import _ from 'lodash';

class Line extends React.Component {

  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    const { line, currentTime } = this.props;
    let pooledIndex = 0;
    const labelStyle = {
      position: 'absolute',
      transform: `translateY(${this.props.absolutePosition * this.props.itemHeight}px)`,
      height: `${this.props.itemHeight}px`
    };
    let list = [];
    _.forIn(line, (label) => {
      list.push(<Label
        value={label.value}
        key={pooledIndex++}
        isPlayed={currentTime >= label.start && currentTime <= label.end}
      />);
    });
    return (
      <div
        className="line"
        style={labelStyle}
      >
        {list}
      </div>
    );
  }
}

export default Line;
