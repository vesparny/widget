'use strict';

import React from 'react';
import Scroller from '../dumb/Scroller';
import $ from 'jquery';

class VideoDetails extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        initilaElement: 0
      };
    }

  onScroll () {
    const scrollTop = React.findDOMNode(this.refs.container).scrollTop;
    const initialElement = Math.floor(scrollTop / this.props.itemHeight);
    this.setState({
      initilaElement: Math.min(initialElement, Math.max(0, this.props.records.count() - this.props.visibleElements))
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
            initilaElement={this.state.initilaElement}
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
