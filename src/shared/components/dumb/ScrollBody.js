'use strict';

import React from 'react';
import Line from './Line'

class ScrollBody extends React.Component {

  render() {

  var elements = this.props.records.toJS();
  var lines = [];

  lines.push(<div style={{height: this.props.displayStart * this.props.recordHeight}} />)


  //for (var i = 0; i < elements.length ;i+=1) {
  for (var i = this.props.displayStart; i <= this.props.displayEnd; i+=1) {
      var record = elements[i];
      for (var key in record) {
        lines.push(<Line line={record[key]} key={key} currentTime={this.props.currentTime}/>);
      }

  }
  lines.push(<div style={{height: (this.props.records.count() - this.props.displayEnd) * this.props.recordHeight}} />)

    return (
      <div>
        {lines}
      </div>

    )
  }
}



export default ScrollBody
