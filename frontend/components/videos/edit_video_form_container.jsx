import { connect } from 'react-redux';
import VideoForm from './video_form';
import { fetchVideo, updateVideo } from '../../actions/video_actions';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'
import EditVideoForm from './edit_video_form';


const mapStateToProps = (state, ownProps) => {
  // debugger
  // let video = ownProps.video;
  // let currentUserId = state.session.id;
  // debugger 
  // let parent_comment = ownProps.
  // let comment = ownProps.comment
  let videoId = ownProps.match.params.videoId;
  let video = state.entities.videos[videoId]
  // debugger
  let currentUser = state.session.id
  // let video = { title: '', description: '' }
  return({
    video,
    currentUser
  });
}
    // formType: "Create Comment",
    // currentUser: state.entities.users[currentUserId],
    // video)


const mapDispatchToProps = dispatch => {
  // debugger
  return({
    action: (formData, videoId) => dispatch(updateVideo(formData, videoId)),
    fetchVideo: video => dispatch(fetchVideo(video))
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(EditVideoForm)