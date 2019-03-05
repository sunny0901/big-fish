import React, { Component} from 'react';
import SignInSignUp from './SignInSignUp';
import { Route, Switch, Redirect } from 'react-router-dom'

class App extends Component {
 
  render() {
    return (
        <Switch>
            <Route exact path = {['/signup', '/login', '/']} component = {SignInSignUp} />
            <Redirect to = '/login' />
        </Switch>
    );
  }
}

export default App;
