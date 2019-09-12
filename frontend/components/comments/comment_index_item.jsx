import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import commentsErrorsReducer from '../../reducers/comments/comments_errors_reducer';

const CommentIndexItem = props => {
  // debugger;
  return(
    <div className="comments-index-item-container">
    <div className="comments-index-item-icon-container">
      <Link to={`/channel/${props.comment.author.id}}`} className="comment-author-icon">
        <FontAwesomeIcon className="comment-author-faIcons" icon={faUserCircle} />
      </Link>
    </div>
    <div className="comments-index-item-body-container">
      <div className="comments-item-name-container">
        <p className="comments-item-name">{props.comment.author.username}</p>
        <p className="comments-item-time">hours ago</p>
      </div>
      <p className="comments-item-body">{props.comment.body}</p>
      <div className="comments-item-likes"></div>
      <div className="comments-item-replies"></div>
    </div>
  </div>

  )

}


export default CommentIndexItem;
