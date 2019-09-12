import { connect } from 'react-redux';
import CommentsIndex from './comments_index';
import { fetchComments, deleteComments } from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
  // debugger;
  let video = ownProps.video;
  let currentUserId = state.session.id;
  let comments;
  if (state !== undefined ) {
    comments = Object.values(state.entities.comments);
  }

  return({
    currentUser: state.entities.users[currentUserId],
    comments,
    video
  })
};

const mapDispatchToProps = dispatch => {
  return({
    fetchComments: () => dispatch(fetchComments()),
    deleteComments: (id) => dispatch(deleteComments(id)),
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsIndex)