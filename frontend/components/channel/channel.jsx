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

  render() {
// debugger
    return(
      <div className="channel-main">
        <ChannelIndex videos={this.props.videos} fetchUser={this.props.fetchUser} user={this.props.user} currentUser={this.props.currentUser} createSub={this.props.createSub} deleteSub={this.props.deleteSub} />
      </div>

    )
  }
}

export default Channel;