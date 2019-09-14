import { connect } from 'react-redux';
import CommentsIndex from './comments_index';
import { fetchComments, deleteComments } from '../../actions/comment_actions';
import NestedCommentItem from './nested_comment_item'

const mapStateToProps = (state, ownProps) => {
  // debugger;
  // let comments;
  // if (state !== undefined ) {
  //   debugger
    let comments = Object.values(state.entities.comments);
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
    deleteComments: (id) => dispatch(deleteComments(id)),
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(NestedCommentItem)