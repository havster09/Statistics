import * as types from '../actions/actionTypes';

// reducers are functions that take a state,action then returns a new state
// [] default state set to empty array
export default function courseReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    default:
      return state;
  }
}
