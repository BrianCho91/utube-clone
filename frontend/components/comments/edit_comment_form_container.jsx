import { connect } from 'react-redux';
import CreateCommentForm from './create_comment_form';
import { updateComment } from '../../actions/comment_actions';
import React from 'react'


const mapStateToProps = (state, ownProps) => {
  // let video = ownProps.video;
  let currentUserId = state.session.id;
  // debugger 
  // let parent_comment = ownProps.
  // let comment = ownProps.comment
  return({
    comment: { 
      body: ""
    },
    // formType: "Create Comment",
    currentUser: state.entities.users[currentUserId],
    // video
  })
};

const mapDispatchToProps = dispatch => {
  return({
    action: comment => dispatch(updateComment(comment)),

  })
};

// class EditCommentForm extends React.Component {

//   componentDidMount() {
//     let comment = ownProps.comment;
//     this.props.fetchPost(commentId);
//   }

//   render() {
//     const { action, formType, comment } = this.props;
//     return (
//       <CreateCommentForm
//         action={action}
//         formType={formType}
//         comment={comment} />
//     );
//   }
// }

export default connect(mapStateToProps, mapDispatchToProps)(CreateCommentForm)