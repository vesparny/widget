'use strict';

import React from 'react';
import Label from './Label';

class Line extends React.Component {

  render() {
    const { line } = this.props;
    const labelStyle = {
      position:'absolute',
      transform: `translateY(${this.props.i * this.props.itemHeight}px)`,
      height: `${this.props.itemHeight}px`
    };
    const list = line.map((label, i) => {
      return (
        <Label
          label={label}
          key={i}
          isPlayed={this.props.currentTime >= label.start && this.props.currentTime <= label.end}/>
      );
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

export default Line
