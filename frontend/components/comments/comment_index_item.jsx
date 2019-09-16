import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import commentsErrorsReducer from '../../reducers/comments/comments_errors_reducer';
import NestedCommentsIndex from './nested_comments_index'
import NestedCommentItemContainer from './nested_comment_item_container'
import CreateCommentFormContainer from './create_comment_form_container'
import EditCommentFormContainer from './edit_comment_form_container';
// import EditCommentFormComponent from './EditCommentFormComponent';

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
    // this.renderComments = this.renderComments.bind(this); 
    this.state = {
      replyOpen: false,
      commentFormOpen: false,
      body: this.props.comment.body
    }
    this.viewReplyClickHandler = this.viewReplyClickHandler.bind(this);
    this.replyClickHandler = this.replyClickHandler.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  };

  viewReplyClickHandler() {
    // console.log(this.state.replyOpen)
    this.setState((prevState) => {
      return { 
        replyOpen: !prevState.replyOpen
      };
    });
  }

  viewReplyClickToggle() {
    // console.log(this.state.replyOpen)
    if (this.state.replyOpen) {
      return "view-reply-comments"
    } else {
      return "hide"
    }
  }

  // handleInput(type) {
  //   return(e) => {
  //     this.setState({
  //       [type]: e.target.value
  //     })
  //   };
  // };

  // handleSubmit(e) {
  //   e.preventDefault();
  //   // debugger;
  //   // this.props.action(this.state)
  //   // let parent_comment_id = this.props.parent_commend_id ? this.props.parent_commend_id : null
  //   // debugger;
  //   this.props.updateComment({
  //     body: this.state.body,
  //   })
  //   this.setState({
  //     body: "",
  //   })
  // };

  replyClickHandler() {
    // console.log(this.state.replyOpen)
    this.setState((prevState) => {
      return {
        commentFormOpen: !prevState.commentFormOpen  };
    });
  }

  replyClickToggle() {
    // console.log(this.state.commentFormOpen)
    if (this.state.commentFormOpen) {
      return "nested-comment-form"
    } else {
      return "hide"
    }
  }

  handleDelete() {
    this.props.deleteComment(this.props.comment.id)
  }

  // renderUpdateForm() {
  //   return (
  //     <div className="comments-edit-container">
  //       <form className="edit-form">
  //         <input type="text"
  //           className="comment-form-input"
  //           onChange={this.handleInput('body')}
  //           value={this.state.body}
  //         />
  //       </form>
  //       <div className="comment-form-submit" onClick={this.handleSubmit}>SAVE</div>
  //     </div>
  //   )
  // }

  render() {
  let video = this.props.video
    // debugger;
    // debugger
    
    let comments = this.props.comment.child_comments.reverse().map(comment => {
      if (comment) {
      return ( <ul>
      <NestedCommentItemContainer key={comment.id} comment={comment} />
      </ul>
      )
    }})
  // debugger;

  let comment = this.props.comment

  if (!this.props.comment.parent_comment) {
    // debugger
  return(
    <div className="comments-index-item-container">
      <div className="comments-index-item-icon-container">
        <Link to={`/channel/${this.props.comment.author.id}`} className="comment-author-icon">
          <FontAwesomeIcon className="comment-author-faIcons" icon={faUserCircle} />
        </Link>
      </div>
      <div className="comments-index-item-body-container">
        <div className="comments-name-edit-container">
          <div className="comments-item-name-container">
            <Link to={`/channel/${this.props.comment.author.id}`}>
              <p className="comments-item-name">{this.props.comment.author.username}</p>
            </Link>
            <p className="comments-item-time">hours ago</p>
          </div>
          <div className="comments-edit-delete-container">
            {/* {this.renderUpdateForm()} */}
            {/* <EditCommentFormContainer comment={this.props.comment} video={this.props.video} currentUser={this.props.currentUser}/> */}
            <div className="delete-toggle-btn" onClick={this.handleDelete}>
              delete
            </div>
          </div>
        </div>
        {/* <div className="comments-item-name-container">
          <Link to={`/channel/${this.props.comment.author.id}`}>
            <p className="comments-item-name">{this.props.comment.author.username}</p>
          </Link>
          <p className="comments-item-time">hours ago</p>
        </div> */}
        <p className="comments-item-body">{this.props.comment.body}</p>
        <div className="comments-item-likes">
          <span className="comment-thumb-up">
            <FontAwesomeIcon className="comment-item-faIcons" icon={faThumbsUp} />
          </span>
          <p className="comment-likes-count">3</p>
          <span className="comment-thumb-down">
            <FontAwesomeIcon className="comment-item-faIcons" icon={faThumbsDown} />
          </span>
          <p className="comment-reply-form-text" onClick={this.replyClickHandler}>REPLY</p>
        </div>
        <div className={this.replyClickToggle()}>
          <CreateCommentFormContainer video={this.props.video} comment={this.props.comment} parent_comment={this.props.comment}/>
        </div>
        <div className="comments-item-replies">
          <p className="view-replies-text" onClick={this.viewReplyClickHandler}>View replies</p>
          
          <div className={this.viewReplyClickToggle()}>
            {comments}
          </div>
      </div>
    </div>
  </div>

  )
  } else {
    return null
  }
}
}


export default CommentIndexItem;
