import { AUTHENTICATE } from '../constants/ActionTypes';

export default function authentication(state = false, action) {
  switch (action.type) {
    case AUTHENTICATE:
      return action.loggedIn;
    default:
      return state;
  }
}
