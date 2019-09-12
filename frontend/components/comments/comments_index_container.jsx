import { connect } from 'react-redux';
import CommentsIndex from './comments_index';
import { fetchComments } from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
  let video = ownProps.video;
  let currentUserId = state.session.id;
  let comments;
  if (state !== undefined ) {
    comments = Object.values(state.comments);
  }
  return({
    currentUser: state.entities.users[currentUserId],
    comments,
    video
  })
};

const mapDispatchToProps = dispatch => {
  return({
    fetchComments: () => dispatch(fetchComments)
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsIndex)