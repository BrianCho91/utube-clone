import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import commentsErrorsReducer from '../../reducers/comments/comments_errors_reducer';


class NestedCommentItem extends React.Component {
  constructor(props) {
    super(props);
    // this.renderComments = this.renderComments.bind(this); 
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
    // let currLike = currentUser.likedComments.find(comment => comment.likeable_id === that.comment.id)
      let currLike = this.props.comment.likes.find(comment => comment.user_id === this.props.currentUser.id)

    // if (currentUser.likedVideos.find(video => video.likeable_id === video.id)) {
    if (currentUser) {
      if (currLike !== undefined) {
        if (currLike.liked === false) {
          console.log('update')
          this.props.updateLike({
            id: currLike.id,
            liked: true,
            likeable_id: that.comment.id,
            likeable_type: "Comment"
          }).then(() => {
            that.props.fetchComment(that.props.comment.id)
          }) 
        } else {
          console.log('remove')
          this.props.deleteLike(currLike.id).then(() => {
            that.props.fetchComment(that.props.comment.id)
          }) 
        }
      } else {
        console.log('create')
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
    // this.setState({
    //   liked: currLike.liked
    // })
  }

  commentUnlikeClickHandler() {
    // debugger
    let that = this
    let currentUser = this.props.currentUser
    that.comment = this.props.comment
    // let currLike = currentUser.likedComments.find(comment => comment.likeable_id === that.comment.id)
    let currLike = this.props.comment.likes.find(comment => comment.user_id === this.props.currentUser.id)


    // if (currentUser.likedVideos.find(video => video.likeable_id === video.id)) {
    if (currentUser) { 
      if (currLike !== undefined) {
        if (currLike.liked === true) {
          console.log('update')
          this.props.updateLike({
            id: currLike.id,
            liked: false,
            likeable_id: that.comment.id,
            likeable_type: "Comment"
          }).then(() => {
            that.props.fetchComment(that.props.comment.id)
          }) 
        } else {
          console.log('remove')
          this.props.deleteLike(currLike.id).then(() => {
            that.props.fetchComment(that.props.comment.id)
          }) 
        }
      } else {
        console.log('create')
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
    // this.setState({
    //   liked: currLike.liked
    // })
  }

  // likedCounter() {
  //   // debugger
  //   return this.props.comment.likes.filter(like => like.liked === true).length
  // }
  
  handleDelete() {
    this.props.deleteComment(this.props.comment.id)
  }

  renderEdits() {
    if (this.props.currentUser) {
      if (this.props.currentUser.id === this.props.comment.author.id) {
        return (
          <div className="comments-edit-delete-container">
              {/* {this.renderUpdateForm()} */}
              {/* <EditCommentFormContainer comment={this.props.comment} video={this.props.video} currentUser={this.props.currentUser}/> */}
              <div className="delete-toggle-btn" onClick={this.handleDelete}>
                delete
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

  return(
    <div className="comments-index-item-container">
      <div className="comments-index-item-icon-container">
        <Link to={`/channel/${nestedComment ? nestedComment.author.id : ""}`} className="comment-author-icon">
          <FontAwesomeIcon className="comment-author-faIcons" icon={faUserCircle} />
        </Link>
      </div>
      <div className="comments-index-item-body-container">
        <div className="comments-name-edit-container">

        <div className="comments-item-name-container">
          <p className="comments-item-name">{nestedComment ? nestedComment.author.username : ""}</p>
          <p className="comments-item-time">hours ago</p>
        </div>
        {this.renderEdits()}
      </div>
        <p className="comments-item-body">{nestedComment ? nestedComment.body : ""}</p>
        {/* <div className="comments-item-likes">
          <span className="comment-thumb-up">
            <FontAwesomeIcon className="comment-item-faIcons" icon={faThumbsUp} />
          </span>
          <p className="comment-likes-count">{this.likedCounter()}</p>
          <span className="comment-thumb-down">
            <FontAwesomeIcon className="comment-item-faIcons" icon={faThumbsDown} />
          </span>
          
        </div> */}
          {/* <p className="comment-reply-form-text">REPLY</p> */}
        {/* <div className="comments-item-replies">
          <p className="view-replies-text">View replies</p>
        </div> */}
      </div>
    </div>

  )
  }
}


export default NestedCommentItem;
