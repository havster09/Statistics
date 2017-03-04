import React from 'react';
import {Link} from 'react-router';
import * as PropTypes from "react/lib/ReactPropTypes";

const CourseListRow = ({course}) => {
    return (
        <tr>
          <td><a href={course.watchHref}>Watch</a> </td>
          <td><Link to={'/course/'+course.id}>{course.title}</Link></td>
          <td>{course.authorId}</td>
          <td>{course.category}</td>
          <td>{course.length}</td>
        </tr>
    );
};

CourseListRow.propTypes = {
    course: PropTypes.object.isRequired
};

export default CourseListRow;
