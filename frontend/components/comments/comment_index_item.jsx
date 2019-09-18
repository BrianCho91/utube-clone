import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import commentsErrorsReducer from '../../reducers/comments/comments_errors_reducer';
import NestedCommentsIndex from './nested_comments_index'
import NestedCommentItemContainer from './nested_comment_item_container'
import CreateCommentFormContainer from './create_comment_form_container'
import EditCommentFormContainer from './edit_comment_form_container';
import NestedCommentFormContainer from './nested_comment_form_container';
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
    this.commentLikeClickHandler = this.commentLikeClickHandler.bind(this);
    this.commentUnlikeClickHandler = this.commentUnlikeClickHandler.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this);
  };

  componentDidMount() {
    // debugger
    // this.props.fetchComments()
    this.props.fetchComment(this.props.comment.parent_comment_id)
    // this.props.fetchComment(this.props.comment.id)
  }

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


    commentLikeClickHandler() {
    // debugger
    let that = this
    let currentUser = this.props.currentUser
    that.comment = this.props.comment
    let currLike = currentUser.likedComments.find(comment => comment.likeable_id === that.comment.id)
  
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
          })
        } else {
          console.log('remove')
          this.props.deleteLike(currLike.id)
        }
      } else {
        console.log('create')
        this.props.createLike({
          id: currentUser.id,
          liked: true,
          likeable_id: that.comment.id,
          likeable_type: "Comment"
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
    let currLike = currentUser.likedComments.find(comment => comment.likeable_id === that.comment.id)

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
          })
        } else {
          console.log('remove')
          this.props.deleteLike(currLike.id)
        }
      } else {
        console.log('create')
        this.props.createLike({
          id: currentUser.id,
          liked: false,
          likeable_id: that.comment.id,
          likeable_type: "Comment"
        })
      }
    }
    // this.setState({
    //   liked: currLike.liked
    // })
  }

  likedCounter() {
    return this.props.comment.likes.filter(like => like.liked === true).length
  }


  render() {
  let video = this.props.video     
    // debugger;
    // debugger
    
    let comments = this.props.comment.child_comments.map(comment => {
      if (comment) {
      return ( 
      <ul>
        <NestedCommentItemContainer key={comment.id} comment={comment} />
      </ul>
      )
    }})
  // debugger;

  let comment = this.props.comment

  if (!this.props.comment.parent_comment_id) {
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

            {this.renderEdits()}

          {/* <div className="comments-edit-delete-container"> */}
            {/* {this.renderUpdateForm()} */}
            {/* <EditCommentFormContainer comment={this.props.comment} video={this.props.video} currentUser={this.props.currentUser}/> */}
            {/* <div className="delete-toggle-btn" onClick={this.handleDelete}>
              delete
            </div>
          </div> */}
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
            <FontAwesomeIcon className="comment-item-faIcons" icon={faThumbsUp} onClick={this.commentLikeClickHandler}/>
          </span>
          <p className="comment-likes-count">{this.likedCounter()}</p>
          <span className="comment-thumb-down">
            <FontAwesomeIcon className="comment-item-faIcons" icon={faThumbsDown} onClick={this.commentUnlikeClickHandler}/>
          </span>
          <p className="comment-reply-form-text" onClick={this.replyClickHandler}>REPLY</p>
        </div>
        <div className={this.replyClickToggle()}>
          <NestedCommentFormContainer video={this.props.video} comment={this.props.comment} parent_comment={this.props.comment}/>
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
  //   <ul>
  //   <NestedCommentItemContainer key={comment.id} comment={comment} />
  // </ul>
    return null

  }
}
}


export default CommentIndexItem;
