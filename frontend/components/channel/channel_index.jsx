import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUserCircle, faBell, faEnvelope, faVideo, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import VideoIndexItem from '../videos/videos_index_item';


class ChannelIndex extends React.Component {
  constructor(props) {
    super(props);
    this.subscriberText = this.subscriberText.bind(this);
    this.subscribeHandler = this.subscribeHandler.bind(this);

  };

  stickyHeader() {
    let banner = document.getElementById('banner')
    let sticky = banner.offsetTop;
    if (window.pageYOffset >= sticky) {
      banner.classList.add('sticky');
    } else {
      banner.classList.remove('sticky')
    }
  }

  subscribeHandler() {
    let that = this;
    // debugger
    let currentUser = this.props.currentUser;

    if (currentUser) {
      let currSub = this.props.user
      let matchingSub = this.props.currentUser.subscriptions.find(sub => sub.subscribee_id === currSub.id)
      if (!matchingSub) {
        this.props.createSub({ subscribee_id: currSub.id })
          .then(that.setState({ subbed: true }))
          .then(() => {
            that.props.fetchUser(that.props.currentUser.id);
            that.props.fetchUser(that.props.user.id);
          })
      } else {
        this.props.deleteSub(matchingSub.id)
          .then(that.setState({ subbed: false }))
          .then(() => {
            that.props.fetchUser(that.props.user.id);
            that.props.fetchUser(that.props.currentUser.id);
          })
      }
    }
  }

  subscriberText() {
    // debugger
    let currentUser = this.props.currentUser;
    if (currentUser) {

      let currSub = this.props.user

      let matchingSub = this.props.currentUser.subscriptions.find(sub => sub.subscribee_id === currSub.id)

      if (!matchingSub) {
        return <button className="sub-btn" onClick={this.subscribeHandler} >SUBSCRIBE</button>
      } else {
        return <button className="sub-btn" onClick={this.subscribeHandler} >UNSUBSCRIBE</button>
      }
    }
  }


  render() {



    window.onscroll = this.stickyHeader
    let video = this.props.video
    let videos = this.props.videos
    let user = this.props.user
    if (!user) return null

    let userVideos = this.props.videos.map(video => {
      if (video.author.id === user.id) {
        return <VideoIndexItem video={video} key={video.id} indexPage={true} />
      }
    })
    // debugger

    return (
      <div className="channel-main">
        <div className="header-image">
          <img className="banner-picture" src={user ? user.banner : ""} alt="" />
        </div>
        <div className="header-banner" id="banner">
          <div className="banner-body">
            <div className="banner-user-info">
              <div className="banner-icon-container">
                <Link to={`/channel/${user ? user.id : ""}`} className="banner-icon">
                  <img className="user-icon-channel" src={user ? user.photo : ""} alt="" />
                </Link>
              </div>
              <div className="banner-description">
                <p className="banner-artist">{user ? user.username : ""}</p>
                <p className="banner-sub-count">
                  {user ? user.subscribers.length : ""} {user.subscribers.length <= 1 ? "subscriber" : "subscribers"}
                </p>
              </div>
            </div>
            <div className="banner-sub-container">
              <div className="banner-sub-btn">
                {this.subscriberText()}
              </div>
            </div>
          </div>
        </div>

        <div className="channel-main-body" id="body">
          <div className="channel-main-body-container">
            <p className="channel-main-text">Uploads</p>
            <div className="channel-main-video-container">
              {userVideos}
            </div>
          </div>
        </div>
      </div>


    )
  }
}

export default ChannelIndex;