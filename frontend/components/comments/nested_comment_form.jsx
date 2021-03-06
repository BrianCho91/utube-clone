import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

class NestedCommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
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
      parent_comment_id: this.props.comment.id
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

  handleLightUpInput() {

  }

  // closeReply() {
  //   // debugger
  //   let openReply = document.getElementsByClassName('nested-comment-form')
  //   openReply[0].className.toggle = "hide"
  // }

  render() {
    if (this.props.currentUser) {
      return (
        <div className="nested-comment-form-item-container">
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
}

export default NestedCommentForm;