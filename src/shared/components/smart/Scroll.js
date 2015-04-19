'use strict';

import React from 'react';
import ScrollBody from '../dumb/ScrollBody'

class Scroll extends React.Component {

  constructor(props) {
    super(props);
    var recordHeight = 20;
    var recordsPerBody = Math.floor((130 - 2) / recordHeight);
    this.state =  {
        recordHeight: recordHeight,
        recordsPerBody: recordsPerBody,
        visibleStart: 0,
        visibleEnd: recordsPerBody,
        displayStart: 0,
        displayEnd: recordsPerBody * 2
    };

  }

  shouldComponentUpdate(nextProps){
    console.log(nextProps)
    return true;

  }

  componentWillReceiveProps(nextProps){

  }

  scrollState(scroll) {
      var visibleStart = Math.floor(scroll / this.state.recordHeight);
      var visibleEnd = Math.min(visibleStart + this.state.recordsPerBody, this.props.transcript.count() - 1);

      var displayStart = Math.max(0, Math.floor(scroll / this.state.recordHeight) - this.state.recordsPerBody * 1.5);
      var displayEnd = Math.min(displayStart + 4 * this.state.recordsPerBody, this.props.transcript.count() - 1);

      this.setState({
          visibleStart: visibleStart,
          visibleEnd: visibleEnd,
          displayStart: displayStart,
          displayEnd: displayEnd,
          scroll: scroll
      });
  }

  onScroll() {
    this.scrollState(React.findDOMNode(this.refs.scrollable).scrollTop);
  }


  render() {
    console.log('rendersasdasdasd');
    var height = this.state.recordHeight * this.props.transcript.count()
    return (
      <div id="transcript" className="transcript ng-scope" ref="scrollable" onScroll={this.onScroll.bind(this)}>
        <div style={{height:height}}>
          <ScrollBody
            currentTime={this.props.currentTime}
            records={this.props.transcript}
            visibleStart={this.state.visibleStart}
            visibleEnd={this.state.visibleEnd}
            displayStart={this.state.displayStart}
            displayEnd={this.state.displayEnd}
            recordHeight={this.state.recordHeight}
          />
          </div>
      </div>
    )
  }
}



export default Scroll
