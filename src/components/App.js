import React, {PropTypes} from 'react';
import Header from '../common/Header';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';



class App extends React.Component {
    render() {
        return (
            <div>
              <AppBar title="RHBA Stats"/>
              <RaisedButton label="test"/>
                <Header/>
              {this.props.children}
            </div>

        );
    }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
