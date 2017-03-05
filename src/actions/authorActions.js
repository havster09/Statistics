import * as types from './actionTypes';
import AuthorApi from '../api/mockAuthorApi';
// Redux Actions are functions which returns an object with a required type property

export function loadAuthorsSuccess(authors) {
  return {
    type:types.LOAD_AUTHORS_SUCCESS,
    authors
  };
}

export function loadAuthors() {
  return function(dispatch) {
    return AuthorApi.getAllAuthors()
      .then((data) => {
      dispatch(loadAuthorsSuccess(data));
    }).catch(error => {
      throw(error);
    });
  };
}
