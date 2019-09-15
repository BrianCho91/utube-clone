import { connect } from 'react-redux';
import VideoShow from './video_show';
import React from "react";
import { Link } from 'react-router-dom';
import { fetchVideo, fetchVideos } from '../../actions/video_actions'

const mapStateToProps = (state, ownProps) => {
  let currentUserId = state.session.id;
  let videoId = ownProps.match.params.videoId;
  let video = state.entities.videos[videoId]
  let videos = Object.values(state.entities.videos);
  return ({
    video,
    videos,
    currentUser: state.entities.users[currentUserId]
  })
}

const mapDispatchToProps = dispatch => {
  return({
    fetchVideo: (id) => dispatch(fetchVideo(id)),
    fetchVideos: (query) => dispatch(fetchVideos(query))
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoShow)