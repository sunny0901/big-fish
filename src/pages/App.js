import React, { Component } from 'react';
import SignInSignUp from './SignInSignUp';
import Questions from './Questions'
import styles from '../pages/styles/Questions'
import Header from '../components/Header'
import defaultAvatar from '../assets/images/avatar_default.jpg'
import { connect } from 'react-redux'
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom'
import Popups from '../components/Popups'
import { register } from '../modules'

class App extends Component {

  render() {
    const { token } = this.props;
    return (
      <>
        <BrowserRouter>
          {token ?
            <div style={styles.contanier}>
              <Header avatarSrc={defaultAvatar} />
              <Switch>
                <Route path='/questions' render={() => { return <Questions /> }} />
                {/* user changes url themselves */}
                <Redirect to='/questions' />
              </Switch>
            </div> :
            <Switch>
              <Route exact path={['/signup', '/login', '/']} render={() => { return <SignInSignUp /> }} />
              <Redirect to='/login' />
            </Switch>
          }
        </BrowserRouter>
        <Popups ref={register} />
      </>
    );
  }
}

export default connect((state => ({ token: state.user_token })), null)(App);