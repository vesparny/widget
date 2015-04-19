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
      console.log("saòodjasjdljaslòjdljaslj",file)
      this.src({type: file.videoType, src: "https://d2m6fmjkj9pxeg.cloudfront.net/ffad17d1-0000-4f8a-ace1-b8b5a16b56e7/552fec8d241562cb523710bb/15-04-16/824e66d7-8fc0-471f-bc09-/552fec9a241562cb523710bc.mp4?Expires=1429302925&Signature=lS9dINZmr82PySYFLeCo9BmO7ik0GuBXa7YwYCSnqKIcQms88Om09gvr8hk9bHjSKbK~6MJNS97fICeLHcB3of4I-m3MF5mUz5JLugdGtvT1PpcJwqrh53nV2ebn~vLiblVAMRXXW8RHdC5oy2O2oTw5CM6ATfFHbub05yUWSoo_&Key-Pair-Id=APKAJ4SLTRLDD4L3SI5A"});
      if (playFrom) { // if requested to start directly from specific time
          this.currentTime(playFrom);
          this.play();
        }
      this.on('timeupdate', function () {
        // Allows for smooth scrubbing, when player can't keep up.
        var time = (this.scrubbing) ? this.getCache().currentTime : this.currentTime();
        time = parseInt(time * 100); // we do not need more accuracy
        //console.log(time / 100);
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
