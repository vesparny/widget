'use strict';

import React from 'react';
import classNames from 'classNames';

class Label extends React.Component {
  render() {
    const {label, isPlayed} = this.props;
    const className = classNames({blue: isPlayed});
    return (
      <span className={className}>
        {label.value}
      </span>
     );
  }
}

export default Label;
