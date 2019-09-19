import { combineReducers } from 'redux';
import usersReducer from './users/users_reducer';
import videosReducer from './videos/videos_reducer';
import commentsReducer from './comments/comments_reducer';
import likesReducer from './likes/likes_reducer';
import subsReducer from './subs/subs_reducer';


const entitiesReducer = combineReducers({
  users: usersReducer,
  videos: videosReducer,
  comments: commentsReducer,
  likes: likesReducer,
  subs: subsReducer
});

export default entitiesReducer;