import { connect } from 'react-redux';
import VideoIndex from './videos_index';
import React from "react";
import { Link } from 'react-router-dom';
import { fetchVideos } from '../../actions/video_actions'


const mapStateToProps = (state) => {
  let videos = Object.values(state.entities.videos);
  return ({
    videos
  })
}

const mapDispatchToProps = dispatch => {
  return({
    fetchVideos: () => dispatch(fetchVideos())
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoIndex)