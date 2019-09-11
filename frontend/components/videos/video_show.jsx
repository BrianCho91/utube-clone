import React from 'react';
import { Link } from 'react-router-dom';
import VideoIndexItem from './videos_index_item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

class VideoShow extends React.Component {
  constructor(props) {
    super(props);
    this.shuffleVideos = this.shuffleVideos.bind(this)
  };

  componentDidMount() {
    let videoId = this.props.match.params.videoId;
    this.props.fetchVideo(videoId);
    this.props.fetchVideos();
  }

  shuffleVideos(videos) {
    for (let i = videos.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [videos[i], videos[j]] = [videos[j], videos[i]]
    }
    console.log('bye')
    return videos
  }


  render() {
    let videos = this.props.videos;
    let shuffledVids = this.shuffleVideos(videos).map(video => {
      return (
        <VideoIndexItem video={video} key={video.id} indexPage={false} />
      )
    })

    const video = this.props.video;

    return (
      <div className="video-show-index">
        <div className="video-container">
          <div className="video-clip-container"></div>
            {video ? <img className="show-vid" src={video.test_url}/>: ""}
          <div className="video-description-container">
            <p className="show-video-clip-title">{video ? video.title : "" }</p>
            <div className="sub-title-descriptions-container">
              <div className="show-views-counter">
                <p className="">{video ? video.views + " views" : ""}</p>
              </div>
              <div className="likes-view-counter-container">
                <div className="likes-view-counter">
                  <p className="">{video ? "THUMBS UP ICON" : ""}</p>
                </div>
              </div>
            </div>
            <div className="sub-views-description-container">
              <div className="show-video-icon-container">
                <Link to={`/channel/${video ? video.id : ""}`} className="index-video-author-text">
                  <FontAwesomeIcon className="video-show-faIcons" icon={faUserCircle} />
                </Link>
              </div>
              <div className="show-video-author-description-container">
                <div className="show-video-author-container">
                  <div className="show-video-author-container-items">
                    <p className="show-video-author">
                      <Link to={`/channel/${video ? video.id : ""}`} >
                        {video ? video.author.username : ""}
                      </Link>
                    </p>
                    <p className="show-video-published">
                      {video ? video.created_at : ""}
                    </p>
                  </div>
                  <div className="show-video-subscribe">SUBSCRIBE BUTTON</div>
                </div>
                <div className="show-video-description">
                  {video ? video.description : ""}
                </div>
              </div>
            </div>
          </div>
          <div className="comments-container">
            <div className="comment-form-container"></div>
            <div className="comment-index-container"></div>
          </div>
        </div>
        <div className="next-video-index-container">
          <div className="next-video-container">
            <p>Recommended</p><br/>
            {shuffledVids}
            <div className="next-video-thumbnail">
            </div>
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