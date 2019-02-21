import React, { Component } from 'react';
import styles from './styles/App'
import TextInput from './TextInput'
import Button from './Button'

class App extends Component {
  render() {
    return (
      <div style = {styles.container}>
        <div style = {styles.panel}>
          <p style = {styles.logo}>BIG FISH</p>
          <TextInput placeholder = "Email" />
          <TextInput placeholder = "Password" />
          <TextInput placeholder = "Name" />
          <Button btnText = 'Signup' />
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
