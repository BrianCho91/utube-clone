import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import commentsErrorsReducer from '../../reducers/comments/comments_errors_reducer';
import NestedCommentsIndex from './nested_comments_index'
import NestedCommentItemContainer from './nested_comment_item_container'
import CreateCommentFormContainer from './create_comment_form_container'

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
    // this.renderComments = this.renderComments.bind(this); 
    this.state = {
      replyOpen: false,
      commentFormOpen: false
    }
    this.viewReplyClickHandler = this.viewReplyClickHandler.bind(this);
    this.replyClickHandler = this.replyClickHandler.bind(this);
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

  if (!this.props.comment.parent_comment) {
    // debugger
  return(
    <div className="comments-index-item-container">
      <div className="comments-index-item-icon-container">
        <Link to={`/channel/${this.props.comment.author.id}}`} className="comment-author-icon">
          <FontAwesomeIcon className="comment-author-faIcons" icon={faUserCircle} />
        </Link>
      </div>
      <div className="comments-index-item-body-container">
        <div className="comments-item-name-container">
          <p className="comments-item-name">{this.props.comment.author.username}</p>
          <p className="comments-item-time">hours ago</p>
        </div>
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
