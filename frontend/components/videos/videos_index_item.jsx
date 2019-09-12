import React from 'react';
import { Link } from 'react-router-dom';

class VideoIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.childOfVideosIndex = this.childOfVideosIndex.bind(this)

  };

  childOfVideosIndex() {
    if (this.props.indexPage) {
      return (
        <div className="video-item-container">
          <Link to={`/watch/${this.props.video.id}`} >
            <img className="thumbnails" src={this.props.video.test_url} />
          </Link>
          {console.log(this.props.video.test_url)}
          <p className="index-video-title">
            <Link to={`/watch/${this.props.video.id}`} className="index-video-title-text">{this.props.video.title}</Link>
          </p>
          <p className="index-video-author">
            <Link to={`/channel/${this.props.video.id}`} className="index-video-author-text">{this.props.video.author.username}</Link>
          </p>
          <div className="index-view-container">
            <p className="index-video-views">
              {this.props.video.views} views
            </p> <span className="index-video-upload-date">Created: {this.props.video.created_at}</span>
          </div>
        </div>
      )
    }
  }

  childOfVideosShow() {
    if (!this.props.indexPage) {
      console.log('hi')
      return (
        <div className="show-video-item-container">
          <Link to={`/watch/${this.props.video.id}`} >
            <img className="show-thumbnails" src={this.props.video.test_url} />
          </Link>
          {console.log(this.props.video.test_url)}
          <div className="show-index-video-description">
            <p className="index-video-title">
              <Link to={`/watch/${this.props.video.id}`} className="index-video-title-text">{this.props.video.title}</Link>
            </p>
            <p className="index-video-author">
              <Link to={`/channel/${this.props.video.id}`} className="index-video-author-text">{this.props.video.author.username}</Link>
            </p>
            <div className="index-view-container">
              <p className="index-video-views">
                {this.props.video.views}
              </p>
            </div>
          </div>
        </div>
      )
    }
  }


  render() {
    
    return (
      <div>
        {this.childOfVideosIndex()}
        {this.childOfVideosShow()}
      </div>
    )
  }

}

export default VideoIndexItem;
