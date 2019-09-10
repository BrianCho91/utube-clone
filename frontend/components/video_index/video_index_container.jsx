import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import VideoIndex from './video_index';
import React from "react";
import { Link } from 'react-router-dom';


const mapStateToProps = ( state, ownProps) => {
  return ({
    
  })
}

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(VideoIndex)