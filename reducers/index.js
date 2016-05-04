import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import comments from './comments';
import newComment from './newComment';
import authentication from './authentication';

const rootReducer = combineReducers({
  authentication,
  newComment,
  comments,
  routing,
});

export default rootReducer;
