import React, { Component } from 'react';
import styles from './styles/App'
import TextInput from './components/TextInput'
import Button from './components/Button'

class App extends Component {
  render() {
    return (
      <div style = {styles.container}>
        <div style = {styles.panel}>
          <p style = {styles.logo}>BIG FISH</p>
          <TextInput style = {{marginBottom: 8}} placeholder = "Email" />
          <TextInput style = {{marginBottom: 8}} placeholder = "Password" />
          <TextInput style = {{marginBottom: 73}} placeholder = "Name" />
          <Button style = {{marginBottom: 52}} btnText = 'Signup' />
          <div style = {styles.footer_container}>
            <div style = {styles.footer}>
              <p style = {styles.footer_text}>Already have an account?&nbsp;&nbsp;</p>
              <p style = {styles.footer_login}>Login</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
