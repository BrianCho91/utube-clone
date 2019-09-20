import React from 'react';
import { Link } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

class CreateCommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      parent_comment: this.props.parent_comment
      // video_id: this.props.video.id,
      // user_id: this.props.currentUser.id
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleSubmit(e) {
    e.preventDefault();
    // debugger;
    // this.props.action(this.state)
    // let parent_comment_id = this.props.parent_commend_id ? this.props.parent_commend_id : null
    // debugger;
    this.props.action({
      body: this.state.body,
      video_id: this.props.video.id,
      user_id: this.props.currentUser.id,
      // parent_comment: this.props.parent_comment
    })
    this.setState({
      body: "",
    })
  };

  handleInput(type) {
    return(e) => {
      this.setState({
        [type]: e.target.value
      })
    };
  };

  pushChildToParent() {
    if (this.props.comment) {
      this.props.comment.child_comments.push(this.props)
    }
  }

  handleLightUpInput() {

  }

  renderCommentForm() {
    if (this.props.currentUser) {
      return (
        <div className="comment-form-item-container">
          <form action="" className="comment-form-item" onSubmit={this.handleSubmit}>
            <input type="text" 
              className="comment-form-input"
              onChange={this.handleInput('body')}
              value={this.state.body}
              placeholder={`Commenting publicly as ${this.props.currentUser.username}`}
            />
            <div className="comment-form-submit-container">
              <button className="comment-form-submit">COMMENT</button>
            </div>
          </form>
        </div>
        )
      } else {
        return(
          <div className="comment-form-item-container-require-signin">
            <p>Please&nbsp;
              <Link to="/login/">sign in</Link>
                &nbsp;to comment</p>
          </div>
        )
      }
    }

  
  render() {
    // if (!this.props.currentUser) return null;
    return(
      <div>
      {/* // <div className="comment-form-container">
      //   <div className="comment-count-container">
      //     <p className="comment-counter">comment counter</p>
      //     <div className="comment-sort-container"></div>
      //   </div>
      //   <div className="comment-form-container-items-container">
      //     <div className="comment-form-icon-container">
      //       <Link to={`/channel/""}`} className="comment-author-icon">
      //         <FontAwesomeIcon className="comment-author-faIcons" icon={faUserCircle} />
      //       </Link>
      //     </div> */}



        <div className="comment-form-container-items-container">
          <div className="comment-form-icon-container">
            {/* <Link to={`/channel/${this.props.currentUser.id}`} className="comment-author-icon"> */}
              {!this.props.currentUser ? <FontAwesomeIcon className="comment-author-faIcons" icon={faUserCircle} /> : ""}
              <img className={this.props.currentUser ? "user-icon" : "hide" } src={this.props.currentUser ? this.props.currentUser.photo : "" } alt=""/>

            {/* </Link> */}
          </div>
          {this.renderCommentForm()}
          </div>
           {/* <div className="comment-form-item-container">
      //       <form action="" className="comment-form-item" onSubmit={this.handleSubmit}>
      //         <input type="text" 
      //           className="comment-form-input"
      //           onChange={this.handleInput('body')}
      //           value={this.state.body}
      //           placeholder={`Commenting publicly as ${this.props.currentUser.username}`}
      //         />
      //       </form>
      //       <div className="comment-form-submit-container">
      //         <button className="comment-form-submit">COMMENT</button>
      //       </div>
      //     </div> */}
        </div>
      // </div>
    )
  }

}

export default CreateCommentForm