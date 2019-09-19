import { RECEIVE_SUB, REMOVE_SUB } from '../../actions/subscription_actions';

const subsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SUB:
      return Object.assign({}, state, { [action.sub.id]: action.sub })
    case REMOVE_SUB:
      let newState = Object.assign({}, state);
      delete newState[action.subId];
      return newState
    default:
      return state
  }
}

export default subsReducer