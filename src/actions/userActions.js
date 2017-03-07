import * as types from './actionTypes';
// Redux Actions are functions which returns an object with a required type property
import {beginAjaxCall} from './ajaxStatusActions';

export function loadUsersSuccess(users) {
  return {
    type:types.LOAD_USERS_SUCCESS,
    users
  };
}

export function loadUsers() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((data) => {
      dispatch(loadUsersSuccess(data));
    }).catch(error => {
      throw(error);
    });
  };
}
