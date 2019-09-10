import React from 'react';
import { Link } from 'react-router-dom';

class VideoShow extends React.Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {
    let videoId = this.props.match.params.videoId;
    this.props.fetchVideo(videoId);
  }

  render() {
    // const video = this.props.video;
    return (
      <div className="video-show-index">
        <div className="video-container">
          <div className="video-clip-container"></div>
            <img className="thumbnails" src={video.test_url}/>
          <div className="video-description-container"></div>
          <div className="comments-container">
            <div className="comment-form-container"></div>
            <div className="comment-index-container"></div>
          </div>
        </div>
        <div className="next-video-index-container">
          <div className="next-video-container">
            <div className="next-video-thumbnail"></div>
          </div>
          <div className="next-videos-index-list">
            <div className="next-videos-item-container">
              <div className="next-video-index-thumbnail"></div>
              <div className="next-video-item-details"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
}

export default VideoShow;