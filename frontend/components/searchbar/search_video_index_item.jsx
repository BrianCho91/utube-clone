import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUserCircle, faBell, faEnvelope, faVideo, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons';


class SearchVideoIndexItem extends React.Component {
  constructor(props) {
    super(props);

  };

  isSearchPage() {
    if (!this.props.isSearchBar) {
      return (
        <div className="search-index-item-container">
          <Link to={`/watch/${this.props.video.id}`} >
            <img className="search-show-thumbnails" src={this.props.video.photoUrl ? this.props.video.photoUrl : `https://img.youtube.com/vi/${this.props.video.test_url}/hqdefault.jpg`} />
          </Link>
          <div className="search-index-video-description">
            <p className="index-video-title">
              <Link to={`/watch/${this.props.video.id}`} className="index-video-title-text">{this.props.video.title}</Link>
            </p>
            <div className="search-video-info">
              <Link to={`/channel/${this.props.video.author.id}`} className="search-video-author-text">{this.props.video.author.username}</Link>
              • <p className="search-views-text">{this.props.video.views.toLocaleString()} views</p>
              • <p className="search-views-text">{this.props.video.publishedAgo}</p>
            </div>
            <p className="search-video-description">{this.props.video.description}</p>
          </div>
        </div>
      )
    }
  }


  render() {
    // debugger
    let video = this.props.video
    if (!video) return null;
    // debugger


    return (
      <div>
        {this.isSearchPage()}
        {this.isSearchBar()}
      </div>

    )
  }
}

export default SearchVideoIndexItem;