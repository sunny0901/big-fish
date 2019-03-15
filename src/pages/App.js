import React, { Component} from 'react';
import SignInSignUp from './SignInSignUp';
import Questions from './Questions'
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom'

class App extends Component {
 
  render() {
    return (
      <BrowserRouter>
        <Switch>
            <Route exact path='/questions' component={Questions} />
            <Route exact path={['/signup', '/login', '/']} component={SignInSignUp} />
            <Redirect to='/login' />
        </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
