import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
import sessionReducer from './users/session_reducer';
import errorsReducer from './errorsReducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer
})

export default rootReducer;