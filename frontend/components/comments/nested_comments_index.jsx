// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUserCircle, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'
// import commentsErrorsReducer from '../../reducers/comments/comments_errors_reducer';
// import NestedCommentItem from './nested_comment_item'

// class NestedCommentsIndex extends React.Component {
//   constructor(props) {
//     super(props);
//     // this.renderComments = this.renderComments.bind(this); 

//   };

//   render() {
//     let video = this.props.video
//     let comment = this.props.comment
//     debugger;
//     let comments = comment.child_comments.reverse().map(comment => {
//       return <NestedCommentItem key={comment.id} comment={comment} deleteComment={this.props.deleteComment} />
//     })

//     return(
//       {comments}
//     )
//   }


// }


// export default NestedCommentsIndex;
