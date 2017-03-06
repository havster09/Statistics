import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';
import CourseForm from './CourseForm';

import * as courseActions from '../../actions/courseActions';
import * as PropTypes from "react/lib/ReactPropTypes";
import {Card} from 'material-ui/Card';

class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      errors: {},
      course: Object.assign({},this.props.course)
    };
    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }

  // lifecycle hook to update State once ajax returns courses data and find course is triggered
  // reinit component state without redux
  componentWillReceiveProps(nextProps) {
    if(this.props.course.id !== nextProps.course.id) {
      this.setState({course:Object.assign({},nextProps.course)});
    }
  }

  updateCourseState(event) {
    const field = event.target.name;
    let course = this.state.course;
    course[field] = event.target.value;
    return this.setState({course:course});
  }

  saveCourse(event) {
    event.preventDefault();
    this.props.actions.saveCourse(this.state.course);
    this.context.router.push('/courses');
  }

  render() {
    return (
      <Card>
         <CourseForm course={this.state.course}
                    errors={this.state.errors}
                    onChange={this.updateCourseState}
                    onSave={this.saveCourse}
                    allAuthors={this.props.authors}/>
      </Card>
    );
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions:PropTypes.object.isRequired
};

ManageCoursePage.contextTypes = {
  router:PropTypes.object
};

function getCourseById(courses,courseId) {
  const courseMatch = courses.find(course => course.id == courseId);
  if(courseMatch) {
    return courseMatch;
  }
  return null;
}

function mapStateToProps(state, ownProps) {
  const courseId = ownProps.params.id; // from path`/course/:id`
  let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};
  if(courseId && state.courses.length > 0) {
    course = getCourseById(state.courses, courseId);
  }
  const authorsFormattedForDropDown = state.authors.map(author=>{
    return {
      value:author.id,
      text:author.firstName +' '+author.lastName
    };
  });
  return {
    course: course,
    authors:authorsFormattedForDropDown
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
