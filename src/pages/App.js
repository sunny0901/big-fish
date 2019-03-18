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
        { this.state.user_token?
        <Switch>
          <Route exact path='/questions' render={()=>{return <Questions user_token={this.state.user_token}/>}}/>
        </Switch>
        :
        <Switch>
            <Route exact path={['/signup', '/login', '/']} render={()=>{return <SignInSignUp onLogin={this.onLogin}/>}} />
            <Redirect to='/login' />
        </Switch>
        }
        </BrowserRouter>
    );
  }
  onLogin = (user_token) => {
    this.setState({
      user_token: user_token,
    })
  }
}

export default App;
