import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUserCircle, faBell, faEnvelope, faVideo, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import VideoIndexItem from '../videos/videos_index_item';


class ChannelIndex extends React.Component {
  constructor(props) {
    super(props);

  };

  stickyHeader() {
    let banner = document.getElementById('banner')
    let sticky = banner.offsetTop;
    if (window.pageYOffset > sticky) {
      banner.classList.add('sticky');
    } else {
      banner.classList.remove('sticky')
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
        console.log(video)
        return <VideoIndexItem video={video} key={video.id} indexPage={true} /> }
    }) 
// debugger

    return(
      <div className="channel-main">
        <div className="header-image">

        </div>
        <div className="header-banner" id="banner">
          <div className="banner-body">
            <div className="banner-user-info">
              <div className="banner-icon-container">
                <Link to={`/channel/${user ? user.id : ""}`} className="banner-icon">
                    <FontAwesomeIcon className="banner-faIcons" icon={faUserCircle} />
                </Link>
              </div>
              <div className="banner-description">
                <p className="banner-artist">{user ? user.username: ""}</p>
                <p className="banner-sub-count">subscribers count</p>
              </div>
            </div>
            <div className="banner-sub-container">
              <div className="banner-sub-btn">SUB BUTTON</div>
            </div>
          </div>
        </div>

        <div className="channel-main-body" id="body">
          <div className="channel-main-body-container">
            <p className="channel-main-text">Uploads</p>
            <div className="channel-main-video-container">
              {userVideos}
              {/* <VideoIndexItem video={video} key={video.id} indexPage={true} /> */}
            </div>
          </div>
        </div>
      </div>
      

    )
  }
}

export default ChannelIndex;