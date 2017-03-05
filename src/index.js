import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {Router,browserHistory} from 'react-router';
import routes from './routes';
import {loadCourses,loadPosts} from './actions/courseActions';
import {loadUsers} from './actions/userActions';
import {loadAuthors} from './actions/authorActions';
import './styles/styles.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

const store = configureStore(); //pass state value from server if needed to overwrite state defaults in reducer
store.dispatch(loadCourses());
store.dispatch(loadPosts());
store.dispatch(loadUsers());
store.dispatch(loadAuthors());
// wrap react router with Provider to make the store available

render(
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
  <Provider store={store}>
  <Router history={browserHistory} routes={routes}/>
  </Provider>
  </MuiThemeProvider>,
  document.getElementById('app')
);
