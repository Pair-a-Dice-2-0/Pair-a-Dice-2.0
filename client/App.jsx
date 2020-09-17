import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// https://reacttraining.com/react-router/web/guides/quick-start
import { connect } from 'react-redux';
// import main containers for each page: login, profile, session page
import Login from './containers/Login.jsx';
import WaitingRoom from './containers/WaitingRoom.jsx';
import SessionRoom from './containers/SessionRoom.jsx';


import './styles.scss';

// mapStateToProps
const mapStateToProps = state => ({
  username: state.main.currentUser.user,
})

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
  return (
    <div className="router">
      <main>
        <Switch>
          <Route
            exact
            path="/"
            component={Login}
          />
          {this.props.username ? <Route
            exact
            path="/waiting-room"
            component={WaitingRoom}
          /> : <Redirect
          to="/"
        />}
          <Route
            exact
            path="/session-room"
            component={SessionRoom}
          />
        </Switch>
      </main>
    </div>
  );
}
}

export default connect(mapStateToProps, null)(App);
