import React, {PropTypes} from 'react';
import Header from '../components/common/Header';
import AppBar from 'material-ui/AppBar';
import {connect} from 'react-redux';



class App extends React.Component {
    render() {
        return (
            <div>
              <AppBar title="RHBA Stats"/>
                <Header loading={this.props.loading}/>
              {this.props.children}
            </div>

        );
    }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading:PropTypes.bool.isRequired
};

function mapStateToProps(state,ownProps) {
  return {
    loading:state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
