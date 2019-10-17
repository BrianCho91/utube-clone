import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faThumbsUp, faThumbsDown, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import commentsErrorsReducer from '../../reducers/comments/comments_errors_reducer';
import NestedCommentsIndex from './nested_comments_index'
import NestedCommentItemContainer from './nested_comment_item_container'
import CreateCommentFormContainer from './create_comment_form_container'
import EditCommentFormContainer from './edit_comment_form_container';
import NestedCommentFormContainer from './nested_comment_form_container';


class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      replyOpen: false,
      commentFormOpen: false,
      body: this.props.comment.body
    }

    this.viewReplyClickHandler = this.viewReplyClickHandler.bind(this);
    this.replyClickHandler = this.replyClickHandler.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.commentLikeClickHandler = this.commentLikeClickHandler.bind(this);
    this.commentUnlikeClickHandler = this.commentUnlikeClickHandler.bind(this)
  };

  componentDidMount() {
    // debugger
    if (this.props.comment.parent_comment_id) {
      this.props.fetchComment(this.props.comment.parent_comment_id)
    }
  }

  viewReplyClickHandler() {
    this.setState((prevState) => {
      return {
        replyOpen: !prevState.replyOpen
      };
    });
  }

  viewReplyClickToggle() {
    if (this.state.replyOpen) {
      return "view-reply-comments"
    } else {
      return "hide"
    }
  }

  replyClickHandler() {
    this.setState((prevState) => {
      return {
        commentFormOpen: !prevState.commentFormOpen
      };
    });
  }

  replyClickToggle() {
    if (this.state.commentFormOpen) {
      return "nested-comment-form"
    } else {
      return "hide"
    }
  }

  handleDelete() {
    let that = this;
    this.props.comment.child_comments.forEach(comment => {
      that.props.deleteComment(comment.id)
    })
    this.props.deleteComment(this.props.comment.id)
  }

  renderEdits() {
    if (this.props.currentUser) {
      if (this.props.currentUser.id === this.props.comment.author.id) {
        return (
          <div className="comments-edit-delete-container">
            <div className="delete-toggle-btn" onClick={this.handleDelete}>
              <FontAwesomeIcon className={`trash-faIcons`} id="trash" icon={faTrashAlt} />
            </div>
          </div>
        )
      }
    }
  }

  commentLikeClickHandler() {
    // debugger
    let that = this
    let currentUser = this.props.currentUser
    this.comment = this.props.comment
    let currLike = this.props.comment.likes.find(comment => comment.user_id === this.props.currentUser.id)

    if (currentUser) {
      if (currLike !== undefined) {
        if (currLike.liked === false) {
          this.props.updateLike({
            id: currLike.id,
            liked: true,
            likeable_id: that.comment.id,
            likeable_type: "Comment"
          }).then(() => {
            that.props.fetchComment(that.props.comment.id)
          })
        } else if (currLike.liked === true) {
          this.props.deleteLike(currLike.id).then(() => {
            that.props.fetchComment(that.props.comment.id)
          })
        }
      } else {
        this.props.createLike({
          id: currentUser.id,
          liked: true,
          likeable_id: that.comment.id,
          likeable_type: "Comment"
        }).then(() => {
          that.props.fetchComment(that.props.comment.id)
        })
      }
    }
  }

  commentUnlikeClickHandler() {
    // debugger
    let that = this
    let currentUser = this.props.currentUser
    that.comment = this.props.comment
    let currLike = this.props.comment.likes.find(comment => comment.user_id === this.props.currentUser.id)

    if (currentUser) {
      if (currLike !== undefined) {
        if (currLike.liked === true) {
          this.props.updateLike({
            id: currLike.id,
            liked: false,
            likeable_id: that.comment.id,
            likeable_type: "Comment"
          }).then(() => {
            that.props.fetchComment(that.props.comment.id)
          })
        } else if (currLike.liked === false) {
          this.props.deleteLike(currLike.id).then(() => {
            that.props.fetchComment(that.props.comment.id)
          })
        }
      } else {
        this.props.createLike({
          id: currentUser.id,
          liked: false,
          likeable_id: that.comment.id,
          likeable_type: "Comment"
        }).then(() => {
          that.props.fetchComment(that.props.comment.id)
        })
      }
    }
  }

  likedCounter() {
    // debugger;
    return this.props.comment.likes.filter(like => like.liked === true).length
  }


  render() {

    let video = this.props.video
    // debugger;

    let comments = this.props.comment.child_comments.map(comment => {
      if (comment) {
        return (
          <ul>
            <NestedCommentItemContainer key={comment.id} comment={comment} />
          </ul>
        )
      }
    })

    let comment = this.props.comment

    let currLike = false;
    let currDislike = false;

    if (this.props.currentUser) {
      currLike = this.props.comment.likes.find(comment => comment.user_id === this.props.currentUser.id && comment.liked === true)
      currDislike = this.props.comment.likes.find(comment => comment.user_id === this.props.currentUser.id && comment.liked === false)
    }

    if (!this.props.comment.parent_comment_id) {
      // debugger
      return (
        <div className="comments-index-item-container">
          <div className="comments-index-item-icon-container">
            <Link to={`/channel/${this.props.comment.author.id}`} className="comment-author-icon">
              <img className="user-icon" src={this.props.comment ? this.props.comment.author.photo : ""} alt="" />
            </Link>
          </div>
          <div className="comments-index-item-body-container">
            <div className="comments-name-edit-container">
              <div className="comments-item-name-container">
                <Link to={`/channel/${this.props.comment.author.id}`}>
                  <p className="comments-item-name">{this.props.comment.author.username}</p>
                </Link>
                <p className="comments-item-time">{this.props.comment.publishedAgo} ago</p>
              </div>
              {this.renderEdits()}
            </div>
            <p className="comments-item-body">{this.props.comment.body}</p>
            <div className="comments-item-likes">
              <span className="comment-thumb-up">
                <FontAwesomeIcon className={currLike ? "comment-item-faIcons glow" : "comment-item-faIcons"} icon={faThumbsUp} onClick={this.commentLikeClickHandler} />
              </span>
              <p className="comment-likes-count">{this.likedCounter()}</p>
              <span className="comment-thumb-down">
                <FontAwesomeIcon className={currDislike ? "comment-item-faIcons glow" : "comment-item-faIcons"} icon={faThumbsDown} onClick={this.commentUnlikeClickHandler} />
              </span>
              <p className="comment-reply-form-text" onClick={this.replyClickHandler}>REPLY</p>
            </div>
            <div className={this.replyClickToggle()}>
              <NestedCommentFormContainer video={this.props.video} comment={this.props.comment} parent_comment={this.props.comment} />
            </div>
            <div className="comments-item-replies">
              <p className="view-replies-text" onClick={this.viewReplyClickHandler}>
                {this.props.comment.child_comments.length > 0 ? "View replies" : ""}
              </p>
            </div>
            <div className={this.viewReplyClickToggle()}>
              {comments}
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
