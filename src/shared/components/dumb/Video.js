'use strict';

import React from 'react';

class Video extends React.Component {

  constructor(props){
    super(props)
    this.player;
  }

  componentDidMount() {
    const that = this;
    const videojs = require('video.js');
    const file = this.props.file.toJSON();
    const playFrom = this.props.playFrom;
    const setup = {
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
    let video, wrapper;

    wrapper = document.createElement('div');
    wrapper.innerHTML = '<video class="video-js vjs-koemei-skin"></video>';
    video = wrapper.firstChild;
    video.setAttribute('id', file._id);
    React.findDOMNode(that.refs.target).appendChild(video);
    this.player = videojs(video, setup, function () {
      this.src({
        type: file.videoType,
        src: file.streamUrl});
      this.on('timeupdate', function () {
        const time = this.scrubbing ?
          this.getCache().currentTime :
          this.currentTime();
        that.props.onUpdateTime(parseInt(time * 100));
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

export default Video;
