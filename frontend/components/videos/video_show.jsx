import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import VideoIndexItem from './videos_index_item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faThumbsUp, faThumbsDown, faSpinner, pulse } from '@fortawesome/free-solid-svg-icons'
import CommentsIndexContainer from '../comments/comments_index_container';

class VideoShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: this.props.currStateLike,
      loaded: false,
      subbed: false,
      clicked: false
    }
    this.shuffledVideos = null;

    this.shuffleVideos = this.shuffleVideos.bind(this)
    this.viewClickHandler = this.viewClickHandler.bind(this);
    this.videoLikeClickHandler = this.videoLikeClickHandler.bind(this);
    this.videoUnlikeClickHandler = this.videoUnlikeClickHandler.bind(this);
    this.highlightedThumbsup = this.highlightedThumbsup.bind(this);
    this.subscribeHandler = this.subscribeHandler.bind(this);
    this.subOrEditButton = this.subOrEditButton.bind(this)
    this.subscriberText = this.subscriberText.bind(this);
    this.deleteVideoHandler = this.deleteVideoHandler.bind(this)
  };

  componentDidMount() {
    // debugger
    let videoId = this.props.match.params.videoId;
    this.props.fetchVideo(videoId);
    this.props.fetchVideos('')
    window.scrollTo(0, 0);
  }


  componentDidUpdate(prevProps) {
    // debugger
    if (prevProps.video) {
      if (prevProps.video.id != this.props.match.params.videoId) {
        this.props.fetchVideo(this.props.match.params.videoId)
        this.shuffledVideos = this.shuffleVideos(this.props.videos)
        window.scrollTo(0, 0);
      }
    }
  }

  shuffleVideos(videos) {
    for (let i = videos.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [videos[i], videos[j]] = [videos[j], videos[i]]
    }
    return videos
  }

  viewClickHandler() {
    if (!this.state.clicked) {
      this.props.updateViews({
        id: this.props.video.id,
        views: this.props.video.views + 1
      })
      this.setState({ clicked: true })
    }
  };

  videoLikeClickHandler() {
    // debugger
    let that = this
    let currentUser = this.props.currentUser
    this.video = this.props.video
    let currLike = this.props.video.likes.find(like => like.user_id === this.props.currentUser.id)
    if (currentUser) {
      if (currLike !== undefined) {
        if (currLike.liked === false) {
          this.props.updateLike({
            id: currLike.id,
            liked: true,
            likeable_id: that.props.video.id,
            likeable_type: "Video"
          }).then(() => {
            that.props.fetchVideo(that.props.video.id);
          })
        } else if (currLike.liked === true) {
          this.props.deleteLike(currLike.id).then(() => {
            that.props.fetchVideo(that.props.video.id);
          })
        }
      } else {
        this.props.createLike({
          id: currentUser.id,
          liked: true,
          likeable_id: that.props.video.id,
          likeable_type: "Video"
        }).then(() => {
          that.props.fetchVideo(that.props.video.id);
        })
      }
    }
  }

  videoUnlikeClickHandler() {
    // debugger
    let that = this
    let currentUser = this.props.currentUser
    this.video = this.props.video
    let currLike = this.props.video.likes.find(like => like.user_id === this.props.currentUser.id)
    if (currentUser) {
      if (currLike !== undefined) {
        if (currLike.liked === true) {
          this.props.updateLike({
            id: currLike.id,
            liked: false,
            likeable_id: that.video.id,
            likeable_type: "Video"
          }).then(() => {
            that.props.fetchVideo(that.props.video.id);
          })
        } else if (currLike.liked === false) {
          this.props.deleteLike(currLike.id).then(() => {
            that.props.fetchVideo(that.props.video.id);
          })
        }
      } else {
        this.props.createLike({
          id: currentUser.id,
          liked: false,
          likeable_id: that.video.id,
          likeable_type: "Video"
        }).then(() => {
          that.props.fetchVideo(that.props.video.id);
        })
      }
    }
  }

  likedCounter() {
    return this.props.video.likes.filter(like => like.liked === true).length
  }

  UnlikedCounter() {
    return this.props.video.likes.filter(like => like.liked === false).length
  }

  highlightedThumbsup(action) {
    let thumb = document.getElementById(likes - thumbsup)
    thumb.classList.toggle(action)

  }

  deleteVideoHandler() {
    let that = this
    this.props.deleteVideo(this.props.match.params.videoId).then(() => {
      that.props.history.replace('/')
    })
  }


  subscribeHandler() {
    let that = this;
    let currentUser = this.props.currentUser;

    let currSub = this.props.video.author
    // debugger
    if (currentUser) {
      let matchingSub = this.props.currentUser.subscriptions.find(sub => sub.subscribee_id === currSub.id)
      if (!matchingSub) {
        this.props.createSub({ subscribee_id: currSub.id })
          .then(that.setState({ subbed: true }))
          .then(() => {
            that.props.fetchUser(that.props.currentUser.id);
          })
      } else {
        this.props.deleteSub(matchingSub.id)
          .then(that.setState({ subbed: false }))
          .then(() => {
            that.props.fetchUser(that.props.currentUser.id);
          })
      }
    }
  }

  subscriberText() {
    // debugger
    let currentUser = this.props.currentUser;

    let currSub = this.props.video.author

    if (currentUser) {
      let matchingSub = this.props.currentUser.subscriptions.find(sub => sub.subscribee_id === currSub.id)

      if (!matchingSub) {
        return <button className="sub-btn" onClick={this.subscribeHandler} >SUBSCRIBE</button>
      } else {
        return <button className="sub-btn" onClick={this.subscribeHandler} >UNSUBSCRIBE</button>
      }
    }
  }

  subOrEditButton() {
    let video = this.props.video;
    let currentUser = this.props.currentUser;
    // debugger
    if (this.props.currentUser) {
      return (
        <div>
          <div className={video.author.id === currentUser.id ? "hide" : "show-video-subscribe"}>
            {this.subscriberText()}
          </div>
          <div className={video.author.id === currentUser.id ? "show-video-subscribe" : "hide"}>
            <Link to={video ? `/upload/edit/${video.id}` : ""} video={video}>
              <button className="sub-btn">EDIT VIDEO</button>
            </Link>
          </div>
          <div className={video.author.id === currentUser.id ? "show-video-subscribe" : "hide"}>
              <button className="sub-delete-btn" onClick={this.deleteVideoHandler} >DELETE</button>
          </div>
        </div>
      )
    } else {
      return <div className="show-video-subscribe">
        <button className="sub-btn" onClick={this.subscribeHandler} >SUBSCRIBE</button>
      </div>
    }
  }

  render() {
    // debugger
    let video = this.props.video;
    if (!video) return null
    let videos = this.props.videos
    // let videos = this.props.dupeVids
    let videoId = this.props.match.params.videoId

    videos = videos.map(video => {
      if (video.id != videoId) {
        return (
          <VideoIndexItem video={video} key={video.id} indexPage={false} fetchVideos={this.props.fetchVideos} videos={videos} />
        )
      }
    });
    let shuffledVideos;

    if (this.shuffledVideos) {
      shuffledVideos = this.shuffledVideos.map(video => {
        if (video.id != videoId) {
          return (
            <VideoIndexItem video={video} key={video.id} indexPage={false} fetchVideos={this.props.fetchVideos} videos={videos} />
          )
        }
      })
    }



    // debugger
    let currLike;
    let currDislike;
    if (this.props.currentUser) {
      currLike = this.props.video.likes.find(like => like.user_id === this.props.currentUser.id && like.liked === true)
      currDislike = this.props.video.likes.find(like => like.user_id === this.props.currentUser.id && like.liked === false)
    }

    let currentUser = this.props.currentUser;


    return (
      <div className="video-show-index">
        <div className="video-container">
          <div className="video-clip-container" onClick={this.viewClickHandler}>
            {video.videoUrl ?
              <video key={video.videoUrl} className="video-clip" width="100%" height="auto" controls>
                <source
                  src={video.videoUrl}
                  type="video/mp4" />
              </video> : ""}
          </div>
          <div className="video-description-container">
            <p className="show-video-clip-title">{video ? video.title : ""}</p>
            <div className="sub-title-descriptions-container">
              <div className="show-views-published-container">
                <p className="shows-view-counter">{video ? video.views.toLocaleString() + " views" : ""}</p>
                • <p className="shows-video-published">{`Published on ${video ? video.published : ""}`}</p>
              </div>
              <div className="likes-view-counter-container">
                <div className="likes-view-counter">
                  <FontAwesomeIcon className={currLike ? `likes-view-faIcons glow` : 'likes-view-faIcons'} id="likes-thumbsup" icon={faThumbsUp} onClick={this.videoLikeClickHandler} />
                  <p className="video-likes-counter">{video ? this.likedCounter() : ""}</p>
                  <FontAwesomeIcon className={currDislike ? "likes-view-faIcons glow" : "likes-view-faIcons"} id="likes-thumbsdown" icon={faThumbsDown} onClick={this.videoUnlikeClickHandler} />
                  <p className="video-likes-counter">{video ? this.UnlikedCounter() : ""}</p>
                </div>
              </div>
            </div>
            <div className="sub-views-description-container">
              <div className="show-video-icon-container">
                <Link to={`/channel/${video.author ? video.author.id : ""}`} className="index-video-author-text">
                  <img className="user-icon-video-show" src={this.props.video.author ? this.props.video.author.photo : ""} alt="" />
                </Link>
              </div>
              <div className="show-video-author-description-container">
                <div className="show-video-author-container">
                  <div className="show-video-author-container-items">
                    <p className="show-video-author">
                      <Link to={`/channel/${video ? video.author.id : ""}`} >
                        {video ? video.author.username : ""}
                      </Link>
                    </p>
                  </div>
                  {this.subOrEditButton()}
                </div>
                <div className="show-video-description">
                  {video ? video.description : ""}
                </div>
              </div>
            </div>
          </div>

          {video ?
            <div className="comments-container">
              <CommentsIndexContainer video={video} />
            </div>
            : ""}
        </div>
        <div className="next-video-index-container">
          <div className="next-video-container">
            <p>Recommended</p><br />
            {/* {shuffledVids} */}
            {shuffledVideos ? shuffledVideos : videos}
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

export default (VideoShow);