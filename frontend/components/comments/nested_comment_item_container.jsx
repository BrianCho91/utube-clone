import { connect } from 'react-redux';
import CommentsIndex from './comments_index';
import { fetchComment, fetchComments, deleteComment } from '../../actions/comment_actions';
import NestedCommentItem from './nested_comment_item'

const mapStateToProps = (state, ownProps) => {

  let comments = Object.values(state.entities.comments);
  return ({
    comments
  })
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchComments: () => dispatch(fetchComments()),
    fetchComment: (id) => dispatch(fetchComment(id)),
    deleteComment: (id) => dispatch(deleteComment(id)),
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(NestedCommentItem)