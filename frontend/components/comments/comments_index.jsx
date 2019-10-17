import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import CommentIndexItem from './comment_index_item';
import CreateCommentFormContainer from '../comments/create_comment_form_container';

class CommentsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentsLength: this.props.video.comments.length
    }
  };

  componentDidMount() {
    this.props.fetchComments()
  }


  componentDidUpdate(prevProps, prevState) {
    if (prevProps.comments.length !== this.props.comments.length || prevProps.video.comments.length !== this.props.video.comments.length) {
      this.props.fetchVideo(this.props.video.id)
    }
  }

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
    return (
      <div>
        <div className="comment-form-container">
          <div className="comment-count-container">
            <p className="comment-counter">{video.comments.length ? video.comments.length : 0} {video.comments.length > 1 ? "comments" : "comment"}</p>
            <div className="comment-sort-container"></div>
          </div>

          <CreateCommentFormContainer video={video} />
        </div>
        <div className="comments-index-container">
          {comments}

        </div>
      </div>
    )
  }

}

export default CommentsIndex