import { connect } from 'react-redux';
import Header from './header';
import { logout } from '../../actions/session_actions';

const mapStateToProps = state => {
  let currentUserId = state.session.id
  return({
    currentUser: state.entities.users[currentUserId],
    user: state.entities.users[currentUserId]
  })
};

const mapDispatchToProps = dispatch => {
  return({
    logout: () => dispatch(logout()),
    fetchVideos: (query) => dispatch(fetchVideos(query))
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
