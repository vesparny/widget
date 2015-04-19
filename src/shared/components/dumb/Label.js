'use strict';

import React from 'react';
import Line from './Line';
import classNames from 'classNames';
import shallowEqual from 'react/lib/shallowEqual';

class Label extends React.Component {

  render() {
    const { label, isPlayed } = this.props;
    const className = classNames({ blue: isPlayed })
    return (
      <span className={className}>
        {label.value}
      </span>
     );
  }
}

export default Label
