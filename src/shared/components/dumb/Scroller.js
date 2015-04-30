'use strict';

import React from 'react';
import Line from './Line';
import shouldPureComponentUpdate from '../../utils/shouldPureComponentUpdate';
import _ from 'lodash';

const ADDITIONAL_VISIBLE_LINES = 2;

class Scroller extends React.Component {

  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    const { startIndex, visibleElements, records } = this.props;
    const endIndex = startIndex + visibleElements;
    const lineCount = records.length;
    const visibleStartIndex = Math.max(0, startIndex - ADDITIONAL_VISIBLE_LINES);
    const visibleEndIndex = Math.min(lineCount - 1, endIndex + ADDITIONAL_VISIBLE_LINES);
    let pooledIndex = 0;
    let lines = records
      .slice(visibleStartIndex, visibleEndIndex)
      .map((lineObject, lineIndex) =>{
        let line = {};
        _.forIn(lineObject, (element) => {
          line = <Line line={element}
             key={pooledIndex++}
             absolutePosition={lineIndex + visibleStartIndex}
             itemHeight={this.props.itemHeight}
             currentTime={this.props.currentTime} />;
             return;
        });
        return line;
      }

      );
    return (
      <div>
        {lines}
        <div style={{
          position: 'relative',
          height: (lineCount * this.props.itemHeight) + 'px'
        }} />
      </div>
    );
  }
}

export default Scroller;
