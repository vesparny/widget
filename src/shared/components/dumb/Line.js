'use strict';

import React from 'react';
import Label from './Label';

class Line extends React.Component {
  shouldComponentUpdate(){
    return false;
  }

  render() {

    const { line } = this.props;
    const list = line.map((label, i) => {
      return <Label label={label} key={i} isPlayed={this.props.currentTime >= label.start && this.props.currentTime <= label.end}/>;
    });
    return (
      <div className="line">
        {list}
      </div>
    );
  }
}

export default Line
