'use strict';

import React from 'react';
import Label from './Label';

class Line extends React.Component {
  render() {
    console.log('render');
    const { line } = this.props;
    const list = line.map((label) => {
      return <Label label={label} key={label.id} isPlayed={this.props.currentTime >= label.start && this.props.currentTime <= label.end}/>;
    });
    return (
      <div className="line">
        {list}
      </div>
    );
  }
}

export default Line
