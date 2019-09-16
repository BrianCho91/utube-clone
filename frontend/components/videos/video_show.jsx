import React from 'react';
import { Link } from 'react-router-dom';
import VideoIndexItem from './videos_index_item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import CreateCommentFormContainer from '../comments/create_comment_form_container';
import CommentsIndexContainer from '../comments/comments_index_container';
// import CreateCommentForm from '../comments/create_comment_form';

class VideoShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: null
    }

    this.shuffleVideos = this.shuffleVideos.bind(this)
    this.viewClickHandler = this.viewClickHandler.bind(this);
    this.videoLikeClickHandler = this.videoLikeClickHandler.bind(this);
    this.videoUnlikeClickHandler = this.videoUnlikeClickHandler.bind(this)
  };

  componentDidMount() {
    let videoId = this.props.match.params.videoId;
    this.props.fetchVideo(videoId);
    this.props.fetchVideos('');
  }

  shuffleVideos(videos) {
    for (let i = videos.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [videos[i], videos[j]] = [videos[j], videos[i]]
    }
    // console.log('bye')
    return videos
  }

  viewClickHandler() {
    console.log("clicked")
    // debugger;
    this.props.video ? this.props.video.views += 1 : null
  };

  videoLikeClickHandler() {
    // debugger
    let that = this
    let currentUser = this.props.currentUser
    that.video = this.props.video
    let currLike = currentUser.likedVideos.find(video => video.likeable_id === that.video.id)
  
    // if (currentUser.likedVideos.find(video => video.likeable_id === video.id)) {
    if (currLike !== undefined) {
      if (currLike.liked === false) {
        console.log('update')
        this.props.updateLike({
          id: currLike.id,
          liked: true,
          likeable_id: that.video.id,
          likeable_type: "Video"
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
        likeable_id: that.video.id,
        likeable_type: "Video"
      })
    }
    // this.setState({
    //   liked: currLike.liked
    // })
  }

  videoUnlikeClickHandler() {
    // debugger
    let that = this
    let currentUser = this.props.currentUser
    that.video = this.props.video
    let currLike = currentUser.likedVideos.find(video => video.likeable_id === that.video.id)

    // if (currentUser.likedVideos.find(video => video.likeable_id === video.id)) {
    if (currLike !== undefined) {
      if (currLike.liked === true) {
        console.log('update')
        this.props.updateLike({
          id: currLike.id,
          liked: false,
          likeable_id: that.video.id,
          likeable_type: "Video"
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
        likeable_id: that.video.id,
        likeable_type: "Video"
      })
    }
    // this.setState({
    //   liked: currLike.liked
    // })
  }

  likedCounter() {
    return this.props.video.likes.filter(like => like.liked === true).length
  }

  UnlikedCounter() {
    return this.props.video.likes.filter(like => like.liked === false).length
  }

  render() {
    // debugger
    let videos = this.props.videos;
    let shuffledVids = this.shuffleVideos(videos).map(video => {
      return (
        <VideoIndexItem video={video} key={video.id} indexPage={false} />
      )
    })
// debugger
    let video = this.props.video;

    return (
      <div className="video-show-index">
        <div className="video-container">
          <div className="video-clip-container" onClick={this.viewClickHandler}>
            {video ? video.videoUrl ? 
              <video className="video-preview" width="100%" controls>
                <source
                  src={video.videoUrl}
                  type="video/mp4" />
              </video> : <iframe width="100%" height="100%"
                src={`https://www.youtube.com/embed/${video.test_url}`} 
                frameborder="0" allow="accelerometer; 
                autoplay; encrypted-media; gyroscope; picture-in-picture"  
                allowfullscreen >
              </iframe> 
            : ""}
          </div>
          <div className="video-description-container">
            <p className="show-video-clip-title">{video ? video.title : "" }</p>
            <div className="sub-title-descriptions-container">
              <div className="show-views-counter">
                <p className="">{video ? video.views + " views" : ""}</p>
              </div>
              <div className="likes-view-counter-container">
                <div className="likes-view-counter">
                  <FontAwesomeIcon className="likes-view-faIcons" icon={faThumbsUp} onClick={this.videoLikeClickHandler} />
                  <p className="video-likes-counter">{video ? this.likedCounter() : ""}</p>
                  <FontAwesomeIcon className="likes-view-faIcons" id="likes-thumbsdown" icon={faThumbsDown} onClick={this.videoUnlikeClickHandler}/>
                  <p className="video-likes-counter">{video ? this.UnlikedCounter() : ""}</p>
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
                      <Link to={`/channel/${video ? video.author.id : ""}`} >
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
{/*  */}
      
          {video ?
            <div className="comments-container">
              {/* <CommentsIndexContainer video={video} /> */}
              <div className="comment-form-container">
                <div className="comment-count-container">
                  <p className="comment-counter">{video.comments.length} {video.comments.length > 1 ? "comments" : "comment"}</p>
                  <div className="comment-sort-container"></div>
                </div>
                {/* <div className="comment-form-container-items-container">
                  <div className="comment-form-icon-container">
                    <Link to={`/channel/""}`} className="comment-author-icon">
                      <FontAwesomeIcon className="comment-author-faIcons" icon={faUserCircle} />
                    </Link>
                  </div> */}







              <CreateCommentFormContainer video={video} /> 
                  {/* <CommentsIndexContainer video={video} /> */}

                {/* </div> */}
              </div>
              <CommentsIndexContainer video={video} />
            </div>
          : ""}
      
            {/* <div className="comment-form-container">
              <div className="comment-count-container">
                <p className="comment-counter">comment counter</p>
                <div className="comment-sort-container"></div>
              </div>
              <div className="comment-form-icon-container">
                <Link to={`/channel/""}`} className="comment-author-icon">
                  <FontAwesomeIcon className="comment-author-faIcons" icon={faUserCircle} />
                </Link>
              </div>
            </div> */}
            {/* <div className="comments-index-container">
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
          </div> */}
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