import { connect } from 'react-redux';
import CommentsIndex from './comments_index';
import { fetchComment, fetchComments, deleteComment } from '../../actions/comment_actions';
import NestedCommentItem from './nested_comment_item'

const mapStateToProps = (state, ownProps) => {
  // debugger;
  // let comments;
  // if (state !== undefined ) {
  //   debugger
    let comments = Object.values(state.entities.comments);
    // let currentUserId = state.session.id;
    // }
  // console.log(ownProps)
  // state.users.forEach(user => {
  //   if (user.id === this.props.)
  // })

  // let commentAuthor = state.comments

  return({
    // currentUser: state.entities.users[currentUserId],
    comments
    // video
  })
};

const mapDispatchToProps = dispatch => {
  return({
    fetchComments: () => dispatch(fetchComments()),
    fetchComment: (id) => dispatch(fetchComment(id)),
    deleteComment: (id) => dispatch(deleteComment(id)),
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(NestedCommentItem)