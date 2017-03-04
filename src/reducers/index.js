import {combineReducers} from 'redux';
import courses from './courseReducer';
import posts from './postReducer';

const rootReducer = combineReducers({
  courses,
  posts
});

export default rootReducer;
