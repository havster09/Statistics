import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../actions/userActions';
import * as PropTypes from "react/lib/ReactPropTypes";

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';


class UsersPage extends React.Component {
  constructor(props,context) {
    super(props,context);
  }

  render() {
    const displayUsers = this.props.users.map((post)=>{
      return (<TableRow key={post.id}>
        <TableRowColumn>{post.id}</TableRowColumn>
        <TableRowColumn>{post.name}</TableRowColumn>
        <TableRowColumn>{post.username}</TableRowColumn>
      </TableRow>);
    });
    return (
    <Card>
        <h1>Users Page Son</h1>
      <h1>Posts</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Id</TableHeaderColumn>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Username</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {displayUsers}
        </TableBody>
      </Table>
      </Card>
    );
  }
}

UsersPage.propTypes = {
  users:PropTypes.array.isRequired,
  actions:PropTypes.object.isRequired
};

//ownProps optionally pass url params etc outside of state
function mapStateToProps(state, ownProps) {
  return {
    users:state.users
  };
}

function mapDispatchToProps(dispatch) {
  // dispatch needed to wire action into redux
  return {
    actions:bindActionCreators(userActions,dispatch)
  };
}

// wrap Container component with connect to bind state to props, dispatch actions to props from redux
// mapStateToProps, mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);

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
