import * as types from '../constants/ActionTypes';

export function addComment(text) {
  return { type: types.ADD_COMMENT, text };
}

export function changeNewCommentText(event) {
  return { type: types.CHANGE_NEW_COMMENT_TEXT, text: event.target.value };
}

export function authenticate(loggedIn) {
  return { type: types.AUTHENTICATE, loggedIn };
}
