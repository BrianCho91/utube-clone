import { connect } from 'react-redux';
import VideoForm from './video_form';
import React from "react";
import { Link } from 'react-router-dom';
import { createVideo } from '../../actions/video_actions'


const mapStateToProps = (state) => {
  let currentUser = state.session.id
  let video = { title: '', description: '' }
  return ({
    video,
    currentUser
  })
}

const mapDispatchToProps = dispatch => {
  return ({
    createVideo: (formData) => dispatch(createVideo(formData))
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoForm)