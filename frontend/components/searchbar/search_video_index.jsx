import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUserCircle, faBell, faEnvelope, faVideo, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import SearchVideoIndexItem from './search_video_index_item';
import VideosIndexItem from '../videos/videos_index_item'

class SearchVideoIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchbar: this.props.searchbar,
      searched: false
    };
  };

  componentDidMount() {
    // debugger
    let query = this.props.match.params.query

    this.props.fetchVideos(query).then(() =>   
      this.setState({ searched: true })
    )
  }

  componentDidUpdate(prevProps) {
    let query = this.props.match.params.query;

    if (query !== prevProps.query ) {
      this.props.fetchVideos(query)
    }
  }

  isSearchBar() {
    if (this.props.searchbar) {

    }
  }


  render() {
    // debugger
    if (!this.state.searched) return null
    if (!this.props.videos) return null
    let videos;

    if (this.props.videos) {
      videos = this.props.videos.map(video => {
        return <SearchVideoIndexItem key={video.id} noResults={noResults} video={video} isSearchBar={this.props.searchbar} />
      })
    }
    let noResults = () => {
      if (this.props.videos.length < 1) {
        return <div className="search-index-item-container">No results found. Please try again.</div>
      }
    }

    return (
      <div className="index-main-page">
        <div className="search-index-page">
          {videos}
          {noResults()}
        </div>
      </div>
    )
  }
}

export default SearchVideoIndex;