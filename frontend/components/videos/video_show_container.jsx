import { connect } from 'react-redux';
import VideoShow from './video_show';
import React from "react";
import { Link } from 'react-router-dom';
import { fetchVideo } from '../../actions/video_actions'

const mapStateToProps = (state, ownProps) => {
  let videoId = ownProps.match.params.videoId;
  let video = state.entities.videos[videoId]
  return ({
    video
  })
}

const mapDispatchToProps = dispatch => {
  return({
    fetchVideo: (id) => dispatch(fetchVideo(id)),
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoShow)