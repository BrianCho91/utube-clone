import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faThumbsUp, faThumbsDown, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

class NestedCommentItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);


  };

  componentDidMount() {
    this.props.fetchComment(this.props.comment.id)
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


  handleDelete() {
    this.props.deleteComment(this.props.comment.id)
  }

  renderEdits() {
    if (this.props.currentUser) {
      if (this.props.currentUser.id === this.props.comment.author.id) {
        return (
          <div className="comments-edit-delete-container">
            <div className="delete-toggle-btn" onClick={this.handleDelete}>
              <FontAwesomeIcon className={`trash-faIcons`} id="likes-thumbsup" icon={faTrashAlt} />
            </div>
          </div>
        )
      }
    }
  }


  render() {
    // debugger

    if (!this.props.comment) return null;

    let comments = this.props.comments
    let commentId = this.props.comment.id
    let nestedComment;
    comments.forEach(comment => {
      if (comment.id === commentId) {
        nestedComment = comment
      }
    })
    // debugger
    return (
      <div className="comments-index-item-container">
        <div className="comments-index-item-icon-container">
          <Link to={`/channel/${nestedComment ? nestedComment.author.id : ""}`} className="comment-author-icon">
            <img className="user-icon" src={nestedComment ? nestedComment.author.photo : ""} alt="" />
          </Link>
        </div>
        <div className="comments-index-item-body-container">
          <div className="comments-name-edit-container">

            <div className="comments-item-name-container">
              <p className="comments-item-name">{nestedComment ? nestedComment.author.username : ""}</p>
              <p className="comments-item-time">{nestedComment ? nestedComment.publishedAgo : ""} ago</p>
            </div>
            {this.renderEdits()}
          </div>
          <p className="comments-item-body">{nestedComment ? nestedComment.body : ""}</p>
        </div>
      </div>

    )
  }
}


export default NestedCommentItem;
