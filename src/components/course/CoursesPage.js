import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CourseList from './CourseList';
import * as courseActions from '../../actions/courseActions';
import * as PropTypes from "react/lib/ReactPropTypes";

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


class CoursesPage extends React.Component {
  constructor(props,context) {
    super(props,context);
  }

  render() {
    const displayPosts = this.props.posts.map((post)=>{
      return <li key={post.id}>{post.title}</li>;
    });
    return (
    <Card>
        <h1>Courses Page Son</h1>
        <CourseList courses={this.props.courses}/>

        <h1>Posts</h1>
        <ul>
          {displayPosts}
        </ul>
      </Card>
    );
  }
}

CoursesPage.propTypes = {
  courses:PropTypes.array.isRequired,
  posts:PropTypes.array.isRequired,
  actions:PropTypes.object.isRequired
};

//ownProps optionally pass url params etc outside of state
function mapStateToProps(state, ownProps) {
  return {
    courses:state.courses,
    posts:state.posts
  };
}

function mapDispatchToProps(dispatch) {
  // dispatch needed to wire action into redux
  return {
    actions:bindActionCreators(courseActions,dispatch)
  };
}

// wrap Container component with connect to bind state to props, dispatch actions to props from redux
// mapStateToProps, mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);

/*
redux uni directional flow on save
component => dispatch save => action =>
store => reducer pass new state => store =>
component => trigger render()
 */

/*
5 pieces container component
constructor => init state, binding
child methods => used by render()
render method => call child stateless components
propTypes
connect => redux methods (mapStateToProps,mapDispatchToProps)
*/
