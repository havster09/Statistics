import React from 'react';
import * as PropTypes from "react/lib/ReactPropTypes";
import {CourseUiListRow} from './CourseUiListRow';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow} from 'material-ui/Table';


const CourseList = ({courses}) => {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Title</TableHeaderColumn>
            <TableHeaderColumn>Author</TableHeaderColumn>
            <TableHeaderColumn>Category</TableHeaderColumn>
            <TableHeaderColumn>Length</TableHeaderColumn>
          </TableRow>
        </TableHeader>
          <TableBody>
            {courses.map(course => <CourseUiListRow key={course.id} course={course}/>)}
          </TableBody>
      </Table>

    </div>
  );
};

CourseList.propTypes = {
  courses: PropTypes.array.isRequired
};

export default CourseList;
