import { combineReducers } from 'redux';
import sessionErrorsReducer from './users/session_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer
});

export default errorsReducer;