import { connect } from 'react-redux';
import SearchVideoDropdown from './search_video_dropdown';
import { fetchVideos } from '../../actions/video_actions';

const mapStateToProps = (state, ownProps) => {
  // debugger
  // let searchbar = ownProps.searchbar ? true : false;
  // let query = ownProps.searchBar ? "" : ownProps.match.params.query
  let query = ownProps.searchText
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchVideoDropdown);
