import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import React from "react";
import { Link } from 'react-router-dom';


const mapStateToProps = ( { errors }, ownProps) => {
  return ({
    errors: errors.session,
    formType: 'signup',
    navLink: <Link to="/login">Log In</Link>
  })
}

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)