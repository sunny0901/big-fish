import React, { Component} from 'react';
import SignInSignUp from './SignInSignUp';
import Questions from './Questions'
import { Route, Switch, Redirect } from 'react-router-dom'

class App extends Component {
 
  render() {
    return (
        <Switch>
            <Route exact path='/questions' component={Questions} />
            <Route exact path={['/signup', '/login', '/']} component={SignInSignUp} />
            <Redirect to='/login' />
        </Switch>
    );
  }
}

export default App;
