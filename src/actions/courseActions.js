import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
// Redux Actions are functions which returns an object with a required type property

export function loadCoursesSuccess(courses) {
  return {
    type:types.LOAD_COURSES_SUCCESS,
    courses
  };
}

export function loadPostsSuccess(posts) {
  return {
    type:types.LOAD_POSTS_SUCCESS,
    posts
  };
}

export function loadCourses() {
  return function(dispatch) {
    return courseApi.getAllCourses().then((courses) => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadPosts() {
  return function(dispatch) {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then((data) => {
      dispatch(loadPostsSuccess(data));
    }).catch(error => {
      throw(error);
    });
  };
}
