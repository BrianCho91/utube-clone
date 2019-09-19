import * as SubAPIUtil from '../util/subscription_api_util'

export const RECEIVE_SUB = 'RECEIVE_SUB';
export const REMOVE_SUB = 'REMOVE_SUB';

const receiveSub = sub => ({
  type: RECEIVE_SUB,
  sub
})

const removeSub = subId => ({
  type: REMOVE_SUB,
  subId
})

export const createSub = sub => dispatch => (
  SubAPIUtil.createSub(sub)
    .then(sub => dispatch(receiveSub(sub)))
)

export const deleteSub = subId => dispatch => (
  SubAPIUtil.deleteSub(subId)
    .then(sub => dispatch(removeSub(subId)))
)