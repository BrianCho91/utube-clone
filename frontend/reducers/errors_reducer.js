import { combineReducers } from 'redux';
import sessionErrorsReducer from './users/session_errors_reducer';
import commentsErrorsReducer from './comments/comments_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  commment: commentsErrorsReducer
});

export default errorsReducer;