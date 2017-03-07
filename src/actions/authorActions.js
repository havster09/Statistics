import * as types from './actionTypes';
import AuthorApi from '../api/mockAuthorApi';
// Redux Actions are functions which returns an object with a required type property
import {beginAjaxCall} from './ajaxStatusActions';

export function loadAuthorsSuccess(authors) {
  return {
    type:types.LOAD_AUTHORS_SUCCESS,
    authors
  };
}

export function loadAuthors() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return AuthorApi.getAllAuthors()
      .then((data) => {
      dispatch(loadAuthorsSuccess(data));
    }).catch(error => {
      throw(error);
    });
  };
}
