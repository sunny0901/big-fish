import React, { Component } from 'react';
import styles from './styles/App'
import TextInput from './components/TextInput'
import Button from './components/Button'
import validate, {
  isExist
} from './utils/validations'

class App extends Component {

  input_value = '';

  state = {
      errMes: ''
  }

  onBlur = ({target: {value}}) =>{ //pass in event
    //console.log('on Blur', value); //***event.target.value
    if (!value) {
      this.setState ({
        errMes: 'Required'
      });
    }
  }

  onChange = ({target: {value}}) =>{
    this.input_value = value;
    if (value) {
      this.setState({
        errMes: ''
      })
    }
  }

  onSubmit = () =>{
    const emailErrMes = validate([isExist], this.input_value)
    if (emailErrMes){
      this.setState({
        errMes: emailErrMes
      })
    }
  }

  render() {
    return (
      <div style = {styles.container}>
        <div style = {styles.panel}>
          <p style = {styles.logo}>BIG FISH</p>
          <TextInput errMes = {this.state.errMes} style = {{marginBottom: 8}} placeholder = "Email" />
          {/* <TextInput onBlur = {this.onBlur} errMes = {this.state.errMes} style = {{marginBottom: 8}} placeholder = "Password" />
          <TextInput onBlur = {this.onBlur} errMes = {this.state.errMes} style = {{marginBottom: 73}} placeholder = "Name" /> */}
          <Button onClick = {this.onSubmit} style = {{marginBottom: 52}} btnText = 'Signup' />
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
