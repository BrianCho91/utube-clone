import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUserCircle, faBell, faEnvelope, faVideo, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import VideoIndexItem from '../videos/videos_index_item';
import ChannelIndex from '../channel/channel_index';


class Channel extends React.Component {
  constructor(props) {
    super(props);

  };

  componentDidMount() {
    // debugger
    let userId = this.props.match.params.userId
    this.props.fetchUser(userId);
    this.props.fetchVideos('')
    // debugger
  }

  // stickyHeader() {
  //   let banner = document.getElementById('banner')
  //   let sticky = banner.offsetTop;
  //   if (window.pageYOffset > sticky) {
  //     banner.classList.add('sticky');
  //   } else {
  //     banner.classList.remove('sticky')
  //   }
  // }
  
  render() {
    // debugger
// debugger

    // window.onscroll = this.stickyHeader

    // let userVideos = this.props.videos.map(video => {
    //   if (video.author.id === this.props.user.id) {
    //     console.log(video)
    //     return <ChannelIndex videos={this.props.videos} video={video} key={video.id} indexPage={true} /> }
        // return <VideoIndexItem video={video} key={video.id} indexPage={true} /> }
    // }) 
// debugger
    return(
      <div className="channel-main">
        <ChannelIndex videos={this.props.videos} user={this.props.user}/>
       
        { // {userVideos}
          /* <div className="header-image">

        </div>
        <div className="header-banner" id="banner">
          <div className="banner-body">
            <div className="banner-icon-container">
              
            </div>
          </div>
        </div>

        <div className="channel-main-body" id="body">
          <div className="channel-main-body-container">
            {userVideos}
          </div>
        </div> */}
      </div>
      

    )
  }
}

export default Channel;