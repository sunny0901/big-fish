import React, { Component} from 'react';
import SignInSignUp from './SignInSignUp';
import Questions from './Questions'
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom'

class App extends Component {

  state = {
    user_token: null
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/questions' render={()=>{return <Questions userToken={this.state.user_token}/>}}/>
          <Route exact path={['/signup', '/login', '/']} render={()=>{return <SignInSignUp onLogin={this.onLogin}/>}} />
          <Redirect to='/login' />
        </Switch>
        </BrowserRouter>
    );
  }
  onLogin = (user_token) => {
    this.setState({
      user_token
    })
  }
}

export default App;