import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import VideoIndexItem from './videos_index_item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faThumbsUp, faThumbsDown, faSpinner , pulse } from '@fortawesome/free-solid-svg-icons'
import CreateCommentFormContainer from '../comments/create_comment_form_container';
import CommentsIndexContainer from '../comments/comments_index_container';
// import CreateCommentForm from '../comments/create_comment_form';

class VideoShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: this.props.currStateLike,
      loaded: false,
      subbed: false
    }
    this.shuffledVideos = null;

    this.shuffleVideos = this.shuffleVideos.bind(this)
    this.viewClickHandler = this.viewClickHandler.bind(this);
    this.videoLikeClickHandler = this.videoLikeClickHandler.bind(this);
    this.videoUnlikeClickHandler = this.videoUnlikeClickHandler.bind(this);
    this.highlightedThumbsup = this.highlightedThumbsup.bind(this);
    this.subscribeHandler = this.subscribeHandler.bind(this);
    this.subOrEditButton = this.subOrEditButton.bind(this)
    this.subscriberText = this.subscriberText.bind(this)
  };

  componentDidMount() {
    // debugger
    let videoId = this.props.match.params.videoId;
    this.props.fetchVideo(videoId);
    // this.props.fetchVideos('');
    this.props.fetchVideos('');
    // this.setState({loaded: true})
  }


  componentDidUpdate(prevProps) {
    // debugger
    if (prevProps.video) {
      // debugger
      if (prevProps.video.id != this.props.match.params.videoId) {
      // if (prevProps.video.id !== this.props.match.params.videoId && prevProps.video.id !== this.props.video.id) {
// debugger
        this.props.fetchVideo(this.props.match.params.videoId)
        this.shuffledVideos = this.shuffleVideos(this.props.videos)
        // this.setState({loaded: true})
      }
    }
    if (prevProps.currentUser !== this.props.currentUser) {
      // this.props.fetchVideo(this.props.match.params.videoId)
    }
  }

  // shouldComponentUpdate(nextProps) {
  //   return (this.props.currentUser.likedVideos !== nextProps.currentUser.likedVideos)
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   // this.props.video === this.props.video
  // }


  // componentDidUpdate(prevProps) {
  //   // if (this.props.currentUser) {
  //   //   if (this.props.currentUser.likedVideos !== prevProp.currentUser.likedVideos) {
  //   //     this.setState({ liked: this.props.currentUser.likedVideos })
  //   //   }
  //   // }
  //   // this.state.liked === prevState.liked
  //   // this.state.liked !== prevState.liked
  //   // if(prevProps.currStateLike !== this.props.currStateLike) {
  //   //   this.setState({liked: this.props.currStateLike});
  //   // }
  // }

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
    this.video = this.props.video
    // let currLike = currentUser.likedVideos.find(video => video.likeable_id === that.video.id)
    let currLike = this.props.video.likes.find(like => like.user_id === this.props.currentUser.id)
    console.log(currLike)
    // let currLike = this.props.currLike
    

    // if (currLike === true) { 
    //   highlightedThumbsup("hightlighted")
    // }
  
    // if (currentUser.likedVideos.find(video => video.likeable_id === video.id)) {
    if (currentUser) {
      // debugger
      if (currLike !== undefined) {
      // if (currLike.length > 0) {
        // if (currLike) {
        if (currLike.liked === false) {
          console.log('update')
          this.props.updateLike({
            id: currLike.id,
            liked: true,
            likeable_id: that.props.video.id,
            likeable_type: "Video"
          }).then(() => {
            that.props.fetchVideo(that.props.video.id);
          }) 
          // if (currLike === true) {
          //   highlightedThumbsup("highlighted")
          // }
        } else {
          console.log('remove')
          this.props.deleteLike(currLike.id).then(() => {
            that.props.fetchVideo(that.props.video.id);
          }) 
        }
      } else {
        console.log('create')
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
// }

  videoUnlikeClickHandler() {
    // debugger
    let that = this
    let currentUser = this.props.currentUser
    this.video = this.props.video
    // let currLike = currentUser.likedVideos.find(video => video.likeable_id === that.video.id)
    let currLike = this.props.video.likes.find(like => like.user_id === this.props.currentUser.id)
    console.log(currLike)
    // let currLike = this.props.currLike
    

    // if (currentUser.likedVideos.find(video => video.likeable_id === video.id)) {
    if (currentUser) {
      if (currLike !== undefined) {
        if (currLike.liked === true) {
          console.log('update')
          this.props.updateLike({
            id: currLike.id,
            liked: false,
            likeable_id: that.video.id,
            likeable_type: "Video"
          }).then(() => {
            that.props.fetchVideo(that.props.video.id);
          })
        } else {
          console.log('remove')
          this.props.deleteLike(currLike.id).then(() => {
            that.props.fetchVideo(that.props.video.id);
          }) 
        }
      } else {
        console.log('create')
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
    let thumb = document.getElementById(likes-thumbsup)
    thumb.classList.toggle(action)
    
    // if (this.state.liked) {
    //   return "highlighted"
    // } else {
    //   return ""
    // }
  }


  subscribeHandler() {
    let that = this;
    let currentUser = this.props.currentUser;
    
    let currSub = this.props.video.author
// debugger
    if (currentUser) {
      let matchingSub = this.props.currentUser.subscriptions.find(sub => sub.subscribee_id === currSub.id)
      if (!matchingSub) {
        this.props.createSub({ subscribee_id: currSub.id})
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
      let matchingSub = this.props.currentUser.subscriptions.find(sub =>  sub.subscribee_id === currSub.id )

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
        <div className={video.author.id === currentUser.id ? "hide" : "show-video-subscribe" }>
          {this.subscriberText()}
          {/* </div> */}
          {/* <div className="comment-form-submit-container"> */}
            {/* <button className="sub-btn" onClick={this.subscribeHandler} >SUBSCRIBE</button> */}
          </div>
          <div className={video.author.id === currentUser.id ? "show-video-subscribe" : "hide" }>
            <Link to={video ? `/upload/edit/${video.id}` : ""} video={video}> 
            <button className="sub-btn">EDIT VIDEO</button>
            </Link>
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
    // if (!this.state.loaded) {
    //   videos = (this.shuffleVideos(videos))
    // }

    videos = videos.map(video => {
      return( 
      <VideoIndexItem video={video} key={video.id} indexPage={false} fetchVideos={this.props.fetchVideos} videos={videos}/>
      )
    });
    let shuffledVideos;
    // let shuffledVids = this.shuffleVideos(videos).map(video => {
    if (this.shuffledVideos) {
      shuffledVideos = this.shuffledVideos.map(video=> {
        return (
          <VideoIndexItem video={video} key={video.id} indexPage={false} fetchVideos={this.props.fetchVideos} videos={videos}/>
        )
      })
    }
// debugger

    let currentUser = this.props.currentUser;
    // debugger
    return (
      <div className="video-show-index">
        <div className="video-container">
          <div className="video-clip-container" onClick={this.viewClickHandler}>
            {video.videoUrl ? 
              <video key={video.videoUrl} className="video-preview" width="100%" height="auto" controls>
                <source
                  src={video.videoUrl}
                  type="video/mp4" />
              </video> : "" }
              
            {/* //   <iframe width="100%" height="100%" */}
            {/* //     src={`https://www.youtube.com/embed/${video.test_url}`} 
            //     frameBorder="0" allow="accelerometer; 
            //     autoplay; encrypted-media; gyroscope; picture-in-picture
            //     allowFullScreen" >
            //   </iframe> 
            // : ""} */}
          </div>
          <div className="video-description-container">
            <p className="show-video-clip-title">{video ? video.title : "" }</p>
            <div className="sub-title-descriptions-container">
              <div className="show-views-published-container">
                <p className="shows-view-counter">{video ? video.views + " views" : ""}</p>
                • <p className="shows-video-published">{`Published on ${video ? video.published : ""}`}</p>
              </div>
              <div className="likes-view-counter-container">
                <div className="likes-view-counter">
                  <FontAwesomeIcon className={`likes-view-faIcons`} id="likes-thumbsup" icon={faThumbsUp} onClick={this.videoLikeClickHandler} />
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
                  </div>
                  {this.subOrEditButton()}
                  {/* <div className={(video.author.id === currentUser.id ? "hide" : "show-video-subscribe" ) : "hide"}>SUBSCRIBE BUTTON</div>
                  <div className={(video.author.id === currentUser.id ? "show-video-subscribe" : "hide" ) : "hide"}>
                    <Link to={video ? `/upload/edit/${video.id}` : ""} video={video}> 
                      Edit video
                    </Link>
                  </div> */}
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