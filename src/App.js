import React, { Component} from 'react';
import Signup from './pages/Signup';
import Login from './pages/Login';
import {Route} from 'react-router-dom'

class App extends Component {
 
  render() {
    return (
        <>
        <Route path = '/Signup' component = {Signup} />
        <Route path = '/Login' component = {Login} />
        </>
    );
  }
}

export default App;
