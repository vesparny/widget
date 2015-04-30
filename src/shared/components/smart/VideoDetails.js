'use strict';

import React from 'react';
import Scroller from '../dumb/Scroller';
import $ from 'jquery';

class VideoDetails extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        startIndex: 0
      };
    }

  onScroll () {
    const scrollTop = React.findDOMNode(this.refs.container).scrollTop;
    const startIndex = Math.floor(scrollTop / this.props.itemHeight);
    this.setState({
      startIndex: Math.min(startIndex,
        Math.max(0, this.props.records.length - this.props.visibleElements))
    });
  }

  componentWillUpdate (nextProps) {
    const node = React.findDOMNode(this.refs.container);
    if (nextProps.scrollPosition !== this.props.scrollPosition) {
      $(node).animate({
        scrollTop: this.props.scrollPosition
      }, 500);
    }
  }

  render() {
    return (
      <div className="transcript" ref="container" onScroll={this.onScroll.bind(this)}>
          <Scroller
            currentTime={this.props.currentTime}
            records={this.props.records}
            startIndex={this.state.startIndex}
            visibleElements={this.props.visibleElements}
            itemHeight={this.props.itemHeight}
            onUpdateTime={this.props.onUpdateTime}
          />
      </div>
    );
  }
}

VideoDetails.defaultProps = {
  itemHeight: 20,
  visibleElements: 6
};

export default VideoDetails;
