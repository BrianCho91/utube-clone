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

    }
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleSubmit(e) {
    e.preventDefault();
    // debugger;
    this.props.action({
      body: this.state.body,
      video_id: this.props.video.id,
      user_id: this.props.currentUser.id,
    })
    this.setState({
      body: "",
    })
  };

  handleInput(type) {
    return (e) => {
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
      return (
        <div className="comment-form-item-container-require-signin">
          <p>Please&nbsp;
              <Link to="/login/">sign in</Link>
            &nbsp;to comment</p>
        </div>
      )
    }
  }


  render() {
    return (
      <div>
        <div className="comment-form-container-items-container">
          <div className="comment-form-icon-container">
            {!this.props.currentUser ? <FontAwesomeIcon className="comment-author-faIcons" icon={faUserCircle} /> : ""}
            <img className={this.props.currentUser ? "user-icon" : "hide"} src={this.props.currentUser ? this.props.currentUser.photo : ""} alt="" />
          </div>
          {this.renderCommentForm()}
        </div>
      </div>
    )
  }

}

export default CreateCommentForm