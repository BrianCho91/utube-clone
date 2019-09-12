import { connect } from 'react-redux';
import VideoForm from './video_form';
import React from "react";
import { Link } from 'react-router-dom';
import { createVideo } from '../../actions/video_actions'


const mapStateToProps = (state) => {
  let currentUser = state.session.id
  let video = { title: '', description: '', views: 0, user_id: state.session.id }
  return ({
    video,
    currentUser
  })
}

const mapDispatchToProps = dispatch => {
  return ({
    createVideo: (video) => dispatch(createVideo(video))
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoForm)