import { combineReducers } from 'redux';
import usersReducer from './users/users_reducer';
import videosReducer from './videos/videos_reducer';
import commentsReducer from './comments/comments_reducer';


const entitiesReducer = combineReducers({
  users: usersReducer,
  videos: videosReducer,
  comments: commentsReducer
});

export default entitiesReducer;