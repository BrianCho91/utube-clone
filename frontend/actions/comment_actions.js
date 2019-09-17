import * as CommentApiUtil from '../util/comment_api_util';

export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveAllComments = comments => ({
  type: RECEIVE_ALL_COMMENTS,
  comments
});

const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

const removeComment = commentId => ({
  type: REMOVE_COMMENT,
  commentId
})

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const fetchComment = comment => dispatch => (
  CommentApiUtil.fetchComment(comment)
    .then(comment => dispatch(receiveComment(comment)))
);

export const fetchComments = () => dispatch => (
  CommentApiUtil.fetchComments()
    .then(comments => dispatch(receiveAllComments(comments)))
);

export const createComment = comment => dispatch => (
  CommentApiUtil.createComment(comment)
    .then(comment => dispatch(receiveComment(comment)),
      (errors => dispatch(receiveErrors(errors.responseJSON))))
);

export const updateComment = comment => dispatch => (
  CommentApiUtil.updateComment(comment)
    .then(comment => dispatch(receiveComment(comment)),
      (errors => dispatch(receiveErrors(errors.responseJSON))))
);

export const deleteComment = commentId => dispatch => (
  CommentApiUtil.deleteComment(commentId)
    .then(comment => dispatch(removeComment(comment.id)))
);