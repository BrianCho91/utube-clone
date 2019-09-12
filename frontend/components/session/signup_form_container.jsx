import { connect } from 'react-redux';
import { signup, removeErrors } from '../../actions/session_actions';
import SessionForm from './session_form';
import React from "react";
import { Link } from 'react-router-dom';


const mapStateToProps = ( { errors, session }, ownProps) => {
  return ({
    errors: errors.session,
    formType: 'signup',
    navLink: <Link to="/login">Log In</Link>,
    loggedIn: Boolean(session.id)
  })
}

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(signup(user)),
  removeErrors: () => dispatch(removeErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)