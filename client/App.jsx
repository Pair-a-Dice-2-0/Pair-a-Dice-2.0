import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// https://reacttraining.com/react-router/web/guides/quick-start

// import main containers for each page: login, profile, session page
import Login from './containers/Login.jsx';
import WaitingRoom from './containers/WaitingRoom.jsx';
import SessionRoom from './containers/SessionRoom.jsx';


import './styles.scss';

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
          <Route
            exact
            path="/waiting-room"
            component={WaitingRoom}
          />
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

export default App;
