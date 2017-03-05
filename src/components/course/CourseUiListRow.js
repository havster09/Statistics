import React from 'react';
import {Link} from 'react-router';
import * as PropTypes from "react/lib/ReactPropTypes";
import {TableRow, TableRowColumn} from 'material-ui/Table';

export const CourseUiListRow = ({course}) => {
  return (
    <TableRow>
      <TableRowColumn><a href={course.watchHref}>Watch</a></TableRowColumn>
      <TableRowColumn><Link to={'/course/'+course.id}>{course.title}</Link></TableRowColumn>
      <TableRowColumn>{course.authorId}</TableRowColumn>
      <TableRowColumn>{course.category}</TableRowColumn>
      <TableRowColumn>{course.length}</TableRowColumn>
    </TableRow>
  );
};

CourseUiListRow.propTypes = {
  course: PropTypes.object.isRequired
};
