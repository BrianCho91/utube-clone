import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import CommentIndexItem from './comment_index_item';
import CreateCommentFormContainer from '../comments/create_comment_form_container';

class CommentsIndex extends React.Component {
  constructor(props) {
    super(props);
    // this.renderComments = this.renderComments.bind(this); 
    this.state ={
      commentsLength: this.props.video.comments.length
    }
  };

  componentDidMount() {
    this.props.fetchComments()
    // this.props.fetchVideo(this.props.video.id)
    // this.props.fetchComment(this.props.comment.id)
  }


  componentDidUpdate(prevProps, prevState) {    
    if (prevProps.comments.length !== this.props.comments.length || prevProps.video.comments.length !== this.props.video.comments.length) {
      this.props.fetchVideo(this.props.video.id)
      // this.setState({ commentsLength: this.props.video.comments.length })
      // this.props.fetchComments()
    }
  }

  // renderComments() {
  //   let video = this.props.video
  //   // debugger;

  //   let comments = this.props.comments.reverse().map(comment => {
  //     if (comment.video_id === video.id) {
  //       return (<CommentIndexItem key={comment.id} comment={comment} deleteComment={this.props.deleteComment} />)
  //     }
  //   })
  // }
  
  render() {
      let video = this.props.video
      if (!video) return null

      let comments = this.props.comments.reverse().map(comment => {
      if (this.props.video.id === comment.video_id) {
        return <CommentIndexItem key={comment.id} 
                  currentUser={this.props.currentUser} 
                  fetchComments={this.props.fetchComments}
                  fetchComment={this.props.fetchComment}
                  video={video} 
                  // comments={this.props.comments} 
                  comment={comment} 
                  updateComment={this.props.updateComment} 
                  deleteComment={this.props.deleteComment} 
                  createLike={this.props.createLike}
                  updateLike={this.props.updateLike}
                  deleteLike={this.props.deleteLike}
                />
      }
    })
      // debugger;
    return(
      <div>
      <div className="comment-form-container">
        <div className="comment-count-container">
          <p className="comment-counter">{video.comments.length ? video.comments.length : 0} {video.comments.length > 1 ? "comments" : "comment"}</p>
          <div className="comment-sort-container"></div>
        </div>
        {/* <div className="comment-form-container-items-container">
          <div className="comment-form-icon-container">
            <Link to={`/channel/""}`} className="comment-author-icon">
              <FontAwesomeIcon className="comment-author-faIcons" icon={faUserCircle} />
            </Link>
          </div> */}







      <CreateCommentFormContainer video={video} /> 
          {/* <CommentsIndexContainer video={video} /> */}

        {/* </div> */}
      </div>
      <div className="comments-index-container">
        {comments}
        {/* <div className="comments-index-item-container">
          <div className="comments-index-item-icon-container">
            <Link to={`/channel/""}`} className="comment-author-icon">
              <FontAwesomeIcon className="comment-author-faIcons" icon={faUserCircle} />
            </Link>
          </div>
          <div className="comments-index-item-body-container">
            <div className="comments-item-name-container">
              <p className="comments-item-name">name</p>
              <p className="comments-item-time">hours ago</p>
            </div>
            <p className="comments-item-body">bodybodybody</p>
            <div className="comments-item-likes"></div>
            <div className="comments-item-replies"></div>
          </div>
        </div> */}
      </div>
      </div>
    )
  }

}

export default CommentsIndex