import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import commentsErrorsReducer from '../../reducers/comments/comments_errors_reducer';


class NestedCommentItem extends React.Component {
  constructor(props) {
    super(props);
    // this.renderComments = this.renderComments.bind(this); 

  };

  componentDidMount() {
    // this.props.fetchComments()
  }

  findComment() {

// debugger    
      let comments = this.props.comments
      let commentId = this.props.comment.id
      comments.forEach(comment => {

        if (comment.id === commentId) {
          return comment
        }
      })
    
  }
  

  render() {
// debugger
    let comments = this.props.comments
    let commentId = this.props.comment.id
    let nestedComment;
    comments.forEach(comment => {
      if (comment.id === commentId) {
        nestedComment = comment
      }
    })


  return(
    <div className="comments-index-item-container">
      <div className="comments-index-item-icon-container">
        <Link to={`/channel/${nestedComment ? nestedComment.author.id : ""}`} className="comment-author-icon">
          <FontAwesomeIcon className="comment-author-faIcons" icon={faUserCircle} />
        </Link>
      </div>
      <div className="comments-index-item-body-container">
        <div className="comments-item-name-container">
          <p className="comments-item-name">{nestedComment ? nestedComment.author.username : ""}</p>
          <p className="comments-item-time">hours ago</p>
        </div>
        <p className="comments-item-body">{nestedComment ? nestedComment.body : ""}</p>
        <div className="comments-item-likes">
          <span className="comment-thumb-up">
            <FontAwesomeIcon className="comment-item-faIcons" icon={faThumbsUp} />
          </span>
          <p className="comment-likes-count">3</p>
          <span className="comment-thumb-down">
            <FontAwesomeIcon className="comment-item-faIcons" icon={faThumbsDown} />
          </span>
          {/* <p className="comment-reply-form-text">REPLY</p> */}
          
        </div>
        {/* <div className="comments-item-replies">
          <p className="view-replies-text">View replies</p>
        </div> */}
      </div>
    </div>

  )
  }
}


export default NestedCommentItem;
