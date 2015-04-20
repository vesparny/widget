'use strict';

import { Store } from 'flummox';
import { Map, List } from 'immutable';
import _ from 'lodash';

class WidgetStore extends Store {

  constructor({ widgetActions }) {
    super();
    this.state = {
      file: new Map(),
      transcript: new List(),
      currenTime: 0,
      scrollPosition: 0
    };
    this.register(widgetActions.updateTime, this._updateTime);
    this.registerAsync(widgetActions.getFile, null, this._getFileSuccess, null);
    this.registerAsync(widgetActions.getTranscript, null, this._getTranscriptSuccess, null);
  }

  _getFileSuccess(res){
    this.setState({
      file: this.state.file.merge(res.data)
    });
  }

  _updateTime (currentPlayTime) {
    const LINE_HEIGHT = 20; // in pixels
    let lineNumber = 0; // number of currently active line in the transcript
    let scrollPosition;
    const currentLineNumber = _.findIndex(this.state.transcript.toJS(), function (lineObj) {
      var isCurrentLine = false;
          var line = lineObj[_.keys(lineObj)[0]];
          isCurrentLine = currentPlayTime >= line[0].start &&
            currentPlayTime <= line[line.length - 1].end;

      return isCurrentLine;

    });
    if (currentLineNumber >= 0 && // check that the line was found
      currentLineNumber !== lineNumber) { // don't scroll if the same line
      lineNumber = currentLineNumber;

      let lineTopPosition = LINE_HEIGHT * currentLineNumber;

      scrollPosition = lineTopPosition;
    }

    this.setState({
      currentTime: currentPlayTime,
      scrollPosition: scrollPosition || this.state.scrollPosition
    });
  }

  _getTranscriptSuccess(res){
    const data = res.data;
    let lines = [];
    let ids = 0;
    let currentLine = {};
    currentLine[ids] = [];
    let lineLength = 0;
    let lineNumber = 0; // number of currently active line in the transcript
    let LINE_WIDTH = 51; // in characters
    let LINE_HEIGHT = 20; // in pixels

    // split transcript into lines to fit it into the container
    _.each(data.segmentation, function (seg) {
      _.each(seg.labels, function (label) {
        let newLineLength = lineLength + label.value.length;

        if (newLineLength > LINE_WIDTH) {
          ids += 1;
          lines.push(currentLine);
          currentLine = {};
          currentLine[ids] = [];
          lineLength = 0;
        }

        currentLine[ids].push({
          value: label.value,
          transcript:  label.transcript, // TODO: not clear if this field is used
          start: Number(label.start),
          end: Number(label.end),
          confidence: Number(label.confidence),
          id: 'l_'  + label.start
        });

        lineLength += label.value.length;
      });
    });

    // handle the last line
    if (currentLine.length > 0) {
      lines.push(currentLine);
    }
    this.setState({
      transcript: this.state.transcript.merge(lines)
    });
  }

  getFile () {
    return this.state.file;
  }

  getTranscript () {
    return this.state.transcript;
  }

  getScrollPosition () {
    return this.state.scrollPosition;
  }

  getCurrentTime () {
    return this.state.currentTime;
  }

}

export default WidgetStore
