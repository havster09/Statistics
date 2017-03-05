import * as types from '../actions/actionTypes';
import initialState from './initialState';

// reducers are functions that take a state,action then returns a new state
// [] default state set to empty array
export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    case types.CREATE_COURSE_SUCCESS:
      // creat new array instance in state (immutable !push)
      return [
        ...state,
        Object.assign({}, action.course)
      ];
    case types.UPDATE_COURSE_SUCCESS:
      return [
        ...state.filter((course) => course.id !== action.course.id), // get copy of items !== course that is to be updated
        Object.assign({}, action.course)
      ];
    default:
      return state;
  }
}
