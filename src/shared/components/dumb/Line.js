'use strict';

import React from 'react';
import Label from './Label';

class Line extends React.Component {
  render() {
    const { line } = this.props;
    const list = line.map((label) => {
      return <Label label={label} key={label.get('id')}/>;
    });
    return (
      <div className="line">
        {list}
      </div>
    );
  }
}

export default Line
