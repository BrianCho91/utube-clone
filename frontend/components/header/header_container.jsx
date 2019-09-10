import { connect } from 'react-redux';
import Header from './header';
import { logout } from '../../actions/session_actions';

const mapStateToProps = state => {
  let currentUser = state.session.id
  return({
    currentUser: state.session.id,
    user: state.entities.users[currentUser]
  })
};

const mapDispatchToProps = dispatch => {
  return({
    logout: () => dispatch(logout()),
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
