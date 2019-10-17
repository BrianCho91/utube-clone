import { connect } from 'react-redux';
import Channel from './channel';
import { fetchVideos } from '../../actions/video_actions';
import { fetchUser } from '../../actions/user_actions';
import { createSub, deleteSub } from '../../actions/subscription_actions';


const mapStateToProps = (state, ownProps) => {
  // debugger
  let currentUserId = state.session.id;
  let currentUser = state.entities.users[currentUserId]
  let userId = ownProps.match.params.userId
  let videos = Object.values(state.entities.videos)
  let user = state.entities.users[userId]
  return ({
    userId,
    videos,
    user,
    currentUser,
    // searchbar
  })
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchVideos: (query) => dispatch(fetchVideos(query)),
    fetchUser: (id) => dispatch(fetchUser(id)),
    deleteSub: subId => dispatch(deleteSub(subId)),
    createSub: sub => dispatch(createSub(sub)),
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(Channel);
