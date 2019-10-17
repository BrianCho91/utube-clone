import { connect } from 'react-redux';
import VideoShow from './video_show';
import React from "react";
import { Link } from 'react-router-dom';
import { fetchVideo, fetchVideos, updateViews } from '../../actions/video_actions'
import { createLike, updateLike, deleteLike } from '../../actions/like_actions'
import { createSub, deleteSub } from '../../actions/subscription_actions';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  // debugger
  let currentUserId = state.session.id;
  let currentUser = state.entities.users[currentUserId]
  let videoId = ownProps.match.params.videoId;
  let video = state.entities.videos[videoId]
  let videos = Object.values(state.entities.videos);
  let currStateLike = state.entities.likes[1]

  return ({
    video,
    videos,
    currentUser: state.entities.users[currentUserId],
    currStateLike,
  })
}

const mapDispatchToProps = dispatch => {
  return ({
    fetchVideo: (id) => dispatch(fetchVideo(id)),
    fetchVideos: (query) => dispatch(fetchVideos(query)),
    createLike: like => dispatch(createLike(like)),
    updateLike: like => dispatch(updateLike(like)),
    deleteLike: likeId => dispatch(deleteLike(likeId)),
    createSub: sub => dispatch(createSub(sub)),
    deleteSub: subId => dispatch(deleteSub(subId)),
    fetchUser: (id) => dispatch(fetchUser(id)),
    updateViews: video => dispatch(updateViews(video))
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoShow)