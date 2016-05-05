import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import users from './users';
import comments from './comments';
import newComment from './newComment';
import authentication from './authentication';

const rootReducer = combineReducers({
  authentication,
  newComment,
  comments,
  routing,
  users,
});

export default rootReducer;
