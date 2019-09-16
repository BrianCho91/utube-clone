import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import CommentIndexItem from './comment_index_item';

class CommentsIndex extends React.Component {
  constructor(props) {
    super(props);
    // this.renderComments = this.renderComments.bind(this); 

  };

  componentDidMount() {
    this.props.fetchComments()
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

      let comments = this.props.comments.reverse().map(comment => {
      if (this.props.video.id === comment.video_id) {
        return <CommentIndexItem key={comment.id} video={video} comments={this.props.comments} comment={comment} updateComment={this.props.updateComment} deleteComment={this.props.deleteComment} />
      }
    })
      // debugger;
    return(
      
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
    )
  }

}

export default CommentsIndex