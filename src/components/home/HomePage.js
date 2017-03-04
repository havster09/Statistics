/**
 * Created by haven on 28/02/2017.
 */

import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1>Home Page Son</h1>
        <Link to="about">About baby</Link>
      </div>
    );
  }
}

export default HomePage;
