import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

///////////// testing ///////////////
import { login, signup } from './actions/session_actions';
///////////// testing ///////////////

document.addEventListener("DOMContentLoaded", () => {
  let store = configureStore();
  const root = document.getElementById('root');

  ///////////// testing ///////////////
  window.login = login;
  window.signup = signup;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ///////////// testing ///////////////
  // ReactDOM.render(<h1>REACT DOWN!!</h1>, root);
  
  ReactDOM.render(<Root store={store}/>, root)

})
