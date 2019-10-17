import { connect } from 'react-redux';
import CreateCommentForm from './create_comment_form';
import { updateComment } from '../../actions/comment_actions';
import React from 'react'


const mapStateToProps = (state, ownProps) => {
  let currentUserId = state.session.id;
  // debugger 

  return ({
    comment: {
      body: ""
    },
    currentUser: state.entities.users[currentUserId],
  })
};

const mapDispatchToProps = dispatch => {
  return ({
    action: comment => dispatch(updateComment(comment)),

  })
};


export default connect(mapStateToProps, mapDispatchToProps)(CreateCommentForm)