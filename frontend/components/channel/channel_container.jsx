import { connect } from 'react-redux';
import Channel from './channel';
import { fetchVideos } from '../../actions/video_actions';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  // debugger
  // let searchbar = ownProps.searchbar ? true : false;
  // let query = ownProps.searchBar ? "" : ownProps.match.params.query
  // debugger
  let userId = ownProps.match.params.userId
  let videos = Object.values(state.entities.videos)
  let user = state.entities.users[userId]
  return({
    userId,
    videos,
    user
    // searchbar
  })
};

const mapDispatchToProps = dispatch => {
  return({
    fetchVideos: (query) => dispatch(fetchVideos(query)),
    fetchUser: (id) => dispatch(fetchUser(id))
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(Channel);
