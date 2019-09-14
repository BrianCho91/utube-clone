import { connect } from 'react-redux';
import CreateCommentForm from './create_comment_form';
import {createComment} from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
  let video = ownProps.video;
  let currentUserId = state.session.id;
  // debugger 
  // let parent_comment = ownProps.
  
  return({
    comment: { 
      body: ""
    },
    formType: "Create Comment",
    currentUser: state.entities.users[currentUserId],
    video
  })
};

const mapDispatchToProps = dispatch => {
  return({
    action: comment => dispatch(createComment(comment)),
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateCommentForm)