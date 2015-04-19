'use strict';

import React from 'react';
import ScrollBody from '../dumb/ScrollBody'

class Scroll extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        initilaElement: 0
      }
    }

  onScroll() {
    var scrollTop = React.findDOMNode(this.refs.container).scrollTop;
    var initialElement = Math.floor(scrollTop / this.props.itemHeight);
    this.setState({
      initilaElement: Math.min(initialElement, Math.max(0, this.props.records.count() - this.props.visibleElements))
    })
  }


  render() {
    var wrapperStyle = {
      overflow: 'auto',
      position: 'relative'
    };
    return (
      <div className="transcript" style={wrapperStyle} ref="container" onScroll={this.onScroll.bind(this)}>
          <ScrollBody
            currentTime={this.props.currentTime}
            records={this.props.records}
            initilaElement={this.state.initilaElement}
            visibleElements={this.props.visibleElements}
            itemHeight={this.props.itemHeight}
          />
      </div>
    )
  }
}

Scroll.defaultProps = {
  itemHeight: 20,
  visibleElements: 6
};

export default Scroll
