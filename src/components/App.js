import React, {PropTypes} from 'react';
import Header from '../components/common/Header';
import {AppBar, Drawer, RaisedButton, IconButton, IconMenu, MenuItem} from 'material-ui';
import {connect} from 'react-redux';

class App extends React.Component {
  constructor(props, context) {
    super(props,context);
    this.state = {drawerOpen: false};
    this.handleToggleDrawer = this.handleToggleDrawer.bind(this);
  }

  handleToggleDrawer() {
    this.setState({
      drawerOpen: !this.state.drawerOpen
    });
  }


  render() {
    return (
      <div>
        <AppBar docked={false} onRequestChange={drawerOpen => this.setState({drawerOpen})} onLeftIconButtonTouchTap={this.handleToggleDrawer} onTitleTouchTap={this.handleToggleDrawer} title="RHBA Stats"/>
        <Header loading={this.props.loading}/>

        <Drawer open={this.state.drawerOpen}>
          <MenuItem>Close</MenuItem>
          <MenuItem>Click nothing</MenuItem>
        </Drawer>

        {this.props.children}
      </div>

    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
