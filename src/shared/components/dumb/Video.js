'use strict';

import React from 'react';
import shallowEqual from 'react/lib/shallowEqual';


class Video extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    return !shallowEqual(this.props, nextProps) ||
           !shallowEqual(this.state, nextState);
  }

  componentDidMount() {
    var that = this;
    const videojs = require('video.js');
    var file = this.props.file.toJSON();
    var playFrom = this.props.playFrom;
    var setup = {
        techOrder: ['html5', 'flash'],
        width: 560,
        height: 315,
        autoplay: false,
        preload: false,
        controls: true,
        controlBar: {
          muteToggle: false
        }
      };
    var video, wrapper;

    wrapper = document.createElement('div');
    wrapper.innerHTML = "<video class='video-js vjs-koemei-skin'></video>";
    video = wrapper.firstChild;
    video.setAttribute('id', file._id);
    React.findDOMNode(this.refs.target).appendChild(video);
    videojs(video, setup, function() {
      this.src({type: file.videoType, src: file.streamUrl});
      if (playFrom) { // if requested to start directly from specific time
          this.currentTime(playFrom);
          this.play();
        }
      this.on('timeupdate', function () {
        // Allows for smooth scrubbing, when player can't keep up.
        var time = (this.scrubbing) ? this.getCache().currentTime : this.currentTime();
        time = parseInt(time * 100); // we do not need more accuracy
        that.props.onUpdateTime(time);
      });
    });
  }

  render() {
    const { file } = this.props;
    return (
        <div className="main-container">
          <div className="widget-video-block" ref="target">
          </div>
        </div>
     );
  }
}


export default Video
