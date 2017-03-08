import React, {PropTypes} from 'react';
import Header from '../components/common/Header';
import {AppBar, Drawer, RaisedButton, IconButton, IconMenu, MenuItem} from 'material-ui';
import {connect} from 'react-redux';

class App extends React.Component {
  constructor(props, context) {
    super(props,context);
    this.state = {open: false};
    this.handleToggleDrawer = this.handleToggleDrawer.bind(this);
    this.onRequestChange = this.onRequestChange.bind(this);
  }

  handleToggleDrawer() {
    this.setState({
      open: !this.state.open
    });
  }

  onRequestChange() {
    this.setState({
      open:!this.state.open
    });
  }


  render() {
    return (
      <div>
        <AppBar onLeftIconButtonTouchTap={this.handleToggleDrawer} title="RHBA Stats"/>
        <Header loading={this.props.loading}/>

        <Drawer open={this.state.open} onRequestChange={this.onRequestChange} docked={false}>
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
