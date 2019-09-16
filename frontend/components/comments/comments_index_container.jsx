import { connect } from 'react-redux';
import CommentsIndex from './comments_index';
import { fetchComments, deleteComment, updateComment } from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
  // debugger;
  // debugger
  let video = ownProps.video;
  let currentUserId = state.session.id;
  let comments;
  if (state !== undefined ) {
    comments = Object.values(state.entities.comments);
  }
  // debugger;

  return({
    currentUser: state.entities.users[currentUserId],
    comments,
    video
  })
};

const mapDispatchToProps = dispatch => {
  return({
    fetchComments: () => dispatch(fetchComments()),
    deleteComment: id => dispatch(deleteComment(id)),
    updateComment: comment => dispatch(updateComment(comment))
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsIndex)