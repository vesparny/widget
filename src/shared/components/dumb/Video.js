'use strict';

import React from 'react';

class Video extends React.Component {

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
    wrapper.innerHTML = "<video class='video-js vjs-koemei-skin'></video>";
    video = wrapper.firstChild;
    video.setAttribute('id', file._id);
    React.findDOMNode(that.refs.target).appendChild(video);
    videojs(video, setup, function() {
      this.src({
        type: file.videoType,
        src: "https://d2m6fmjkj9pxeg.cloudfront.net/ffad17d1-0000-4f8a-ace1-b8b5a16b56e7/552fec8d241562cb523710bb/15-04-16/4a01672f-8ab9-418e-ac73-/552feed5241562cb523710bf.mp4?Expires=1429494606&Signature=Mqt9ZgCpyWMBp5ZQLE0e1Oxvh9pQX2VWNPPnO6wT6qGZ6wA3nwHL3vgs9u05fOryMLet~XXgqFJlmehNghs2u2wKEvoFgpuE~c~-f2ccLY1bBOSaIOszOsezrFS4XzTSBfq41ugiUGzEGmO6~6AlCQwpCimxQZTfsuEFwuvGMBk_&Key-Pair-Id=APKAJ4SLTRLDD4L3SI5A"});
      if (playFrom) { // if requested to start directly from specific time
          this.currentTime(playFrom);
          this.play();
        }
      this.on('timeupdate', function () {
        const time = this.scrubbing ?
          this.getCache().currentTime :
          this.currentTime();
        that.props.onUpdateTime(time * 100);
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
