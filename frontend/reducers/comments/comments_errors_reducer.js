import { RECEIVE_ERRORS, RECEIVE_COMMENT, REMOVE_COMMENT } from '../../actions/comment_actions';

const commentsErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    case RECEIVE_COMMENT:
      return [];
    case REMOVE_COMMENT:
      return [];
    default:
      return state;
  }
};

export default commentsErrorsReducer;
