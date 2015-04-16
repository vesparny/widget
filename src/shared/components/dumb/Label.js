'use strict';

import React from 'react';
import Line from './Line';

class Label extends React.Component {

  shouldComponentUpdate(){
    return false;
  }

  render() {
    const { label } = this.props;
    return (
      <span>
        {label.value}
      </span>
     );
  }
}

export default Label
