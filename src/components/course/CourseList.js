import React from 'react';
import * as PropTypes from "react/lib/ReactPropTypes";
import CourseListRow from './CourseListRow';

const CourseList = ({courses}) => {
  return (
    <div>
      <table>
        <thead>
        <tr>
          <th></th>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>Length</th>
        </tr>
        </thead>
        <tbody>
        {courses.map(course => <CourseListRow key={course.id} course={course}/>
        )}
        </tbody>
      </table>
    </div>
  );
};

CourseList.propTypes = {
  courses: PropTypes.array.isRequired
};

export default CourseList;
