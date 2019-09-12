import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

class CommentsIndex extends React.Component {
  constructor(props) {
    super(props);

  };

  componentDidMount() {
    this.props.fetchComments()
  }

  
  render() {

    let comments = Object.values(state.comments);

    return(
      <div className="comments-index-container">
        <div className="comments-index-item-container">
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
        </div>
      </div>
    )
  }

}

export default CommentsIndex