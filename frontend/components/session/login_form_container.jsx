import { connect } from 'react-redux';
import { login, removeErrors } from '../../actions/session_actions';
import SessionForm from './session_form';
import React from "react";
import { Link } from 'react-router-dom';


const mapStateToProps = ( { errors, session } ) => {
  return ({
    errors: errors.session,
    formType: 'login',
    navLink: <Link to="/signup">Sign Up</Link>, 
    loggedIn: Boolean(session.id)
  })
}

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(login(user)),
  removeErrors: () => dispatch(removeErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)