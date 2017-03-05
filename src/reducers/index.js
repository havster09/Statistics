import {combineReducers} from 'redux';
import courses from './courseReducer';
import posts from './postReducer';
import users from './userReducer';
import authors from './authorReducer';

const rootReducer = combineReducers({
  courses,
  posts,
  users,
  authors
});

export default rootReducer;
