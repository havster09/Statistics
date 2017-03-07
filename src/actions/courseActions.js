import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
// Redux Actions are functions which returns an object with a required type property
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadCoursesSuccess(courses) {
  return {
    type: types.LOAD_COURSES_SUCCESS,
    courses
  };
}

export function loadPostsSuccess(posts) {
  return {
    type: types.LOAD_POSTS_SUCCESS,
    posts
  };
}

export function createCourseSuccess(course) {
  return {type: types.CREATE_COURSE_SUCCESS, course};
}

export function updateCourseSuccess(course) {
  return {type: types.UPDATE_COURSE_SUCCESS, course};
}

export function loadCourses() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return courseApi.getAllCourses().then((courses) => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveCourse(course) {
  return function (dispatch, getState) {
    // try get state
    dispatch(beginAjaxCall());
    return courseApi.saveCourse(course).then((course) => {
      course.id ? dispatch(updateCourseSuccess(course)) : dispatch(createCourseSuccess(course));
    }).catch(error => {
      dispatch(ajaxCallError());
      throw(error);
    });
  };
}

export function loadPosts() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then((data) => {
        dispatch(loadPostsSuccess(data));
      }).catch(error => {
        dispatch(ajaxCallError());
        throw(error);
      });
  };
}
