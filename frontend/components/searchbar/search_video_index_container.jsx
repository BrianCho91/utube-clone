import { connect } from 'react-redux';
import SearchVideoIndex from './search_video_index';
import { fetchVideos } from '../../actions/video_actions';

const mapStateToProps = (state, ownProps) => {
  // debugger
  // let searchbar = ownProps.searchbar ? true : false;
  // let query = ownProps.searchBar ? "" : ownProps.match.params.query
  let query = ownProps.match.params.query
  let videos = Object.values(state.entities.videos)
  return({
    query,
    videos,
    // searchbar
  })
};

const mapDispatchToProps = dispatch => {
  return({
    fetchVideos: (query) => dispatch(fetchVideos(query)),
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchVideoIndex);
