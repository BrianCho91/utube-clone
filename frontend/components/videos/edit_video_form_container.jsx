import { connect } from 'react-redux';
import VideoForm from './video_form';
import { fetchVideo, updateVideo } from '../../actions/video_actions';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'
import EditVideoForm from './edit_video_form';


const mapStateToProps = (state, ownProps) => {
  let videoId = ownProps.match.params.videoId;
  let video = state.entities.videos[videoId]
  // debugger
  let currentUser = state.session.id
  return ({
    video,
    currentUser
  });
}

const mapDispatchToProps = dispatch => {
  // debugger
  return ({
    action: (formData, videoId) => dispatch(updateVideo(formData, videoId)),
    fetchVideo: video => dispatch(fetchVideo(video))
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(EditVideoForm)