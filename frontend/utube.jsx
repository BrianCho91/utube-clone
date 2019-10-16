import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

///////////// testing ///////////////
import { login, signup } from './actions/session_actions';
import { deleteComment } from './actions/comment_actions';
///////////// testing ///////////////

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');

  ///////////// testing ///////////////
  // window.login = login;
  // window.signup = signup;
  // window.deleteComment = deleteComment;
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  ///////////// testing ///////////////
  // ReactDOM.render(<h1>REACT DOWN!!</h1>, root);
// debugger
  ReactDOM.render(<Root store={store}/>, root)

})
