import {combineReducers} from 'redux';
import courses from './courseReducer';
import posts from './postReducer';
import users from './userReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  posts,
  users,
  authors,
  ajaxCallsInProgress
});

export default rootReducer;
