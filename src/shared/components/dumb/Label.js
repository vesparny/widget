'use strict';

import React from 'react';
import classNames from 'classNames';
import shouldPureComponentUpdate from '../../utils/shouldPureComponentUpdate';

class Label extends React.Component {

  // https://github.com/jscs-dev/node-jscs/issues/1117
  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    const {value, isPlayed} = this.props;
    const className = classNames({blue: isPlayed});
    return (
      <span className={className}>
        {value}
      </span>
     );
  }
}

export default Label;
