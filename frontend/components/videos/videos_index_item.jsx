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
            <img className="thumbnails" src={`https://img.youtube.com/vi/${this.props.video.test_url}/hqdefault.jpg`} />
          </Link>
          {/* {console.log(this.props.video.test_url)} */}
          <p className="index-video-title">
            <Link to={`/watch/${this.props.video.id}`} className="index-video-title-text">{this.props.video.title}</Link>
          </p>
          <p className="index-video-author">
            <Link to={`/channel/${this.props.video.author.id}`} className="index-video-author-text">{this.props.video.author.username}</Link>
          </p>
          <div className="index-view-container">
            <p className="index-video-views">{this.videoViewsFormat(this.props.video.views)} views</p> 
            • <span className="index-video-upload-date">{`${this.props.video.publishedAgo} ago`}</span>
          </div>
        </div>
      )
    }
  }

  childOfVideosShow() {
    if (!this.props.indexPage) {
      // console.log('hi')
      return (
        <div className="show-video-item-container">
          <Link to={`/watch/${this.props.video.id}`} >
            <img className="show-thumbnails" src={`https://img.youtube.com/vi/${this.props.video.test_url}/hqdefault.jpg`} />
          </Link>
          {/* {console.log(this.props.video.test_url)} */}
          <div className="show-index-video-description">
            <p className="index-video-title">
              <Link to={`/watch/${this.props.video.id}`} className="index-video-title-text">{this.props.video.title}</Link>
            </p>
            <p className="index-video-author">
              <Link to={`/channel/${this.props.video.author.id}`} className="index-video-author-text">{this.props.video.author.username}</Link>
            </p>
            <div className="index-view-container">
              <p className="index-video-views">
                {this.videoViewsFormat(this.props.video.views)} views
              </p>
            </div>
          </div>
        </div>
      )
    }
  }

  videoViewsFormat(views) {
    if (views >= 1000000) {
      return (views / 1000000).toFixed(1).replace(/\.0$/, '') + 'M'
    } else if (views >= 1000) {
      return (views / 1000).toFixed(1).replace(/\.0$/, '') + 'K'
    } else {
      return views
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
