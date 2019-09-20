import { RECEIVE_ALL_VIDEOS, RECEIVE_VIDEO, REMOVE_VIDEO } from "../../actions/video_actions";
import { RECEIVE_COMMENT } from '../../actions/comment_actions'; 

const videosReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);


  switch (action.type) {
    case RECEIVE_ALL_VIDEOS:
      return action.videos
    case RECEIVE_VIDEO:
      return Object.assign({}, state, { [action.video.id]: action.video })
    // case RECEIVE_COMMENT:
    //   // let newState = Object.assign({}, state);
    //   newState[action.comment.video_id].comments.push(action.comment);
    //   return newState;
    case REMOVE_VIDEO:
      // let newState = Object.assign({}, state);
      delete newState[action.videoId];
      return newState  
    default:
      return state
  }
}

export default videosReducer;