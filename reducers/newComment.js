import { CHANGE_NEW_COMMENT_TEXT } from '../constants/ActionTypes';

export default function newComment(state = '', action) {
  switch (action.type) {
    case CHANGE_NEW_COMMENT_TEXT:
      return action.text;
    default:
      return state;
  }
}
