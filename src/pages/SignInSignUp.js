import React, { Component } from 'react';
import styles from '../styles/App'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import { Route, Link } from 'react-router-dom'
import validate, {
  isExist,
  emailFormat,
  uppercase,
  lowercase,
  passwordLength,
  nameLength,
} from '../utils/validations'

class SignInSignUp extends Component {

  state = {
    emailErr: '',
    passwordErr: '',
    nameErr: '',
  }

  input_value = {
    email: '',
    password: '',
    name: ''
  }

  onBlur = ({target: {id, value}}) => { //pass in event
    //console.log('on Blur', value); //***event.target.value
    if (!value) {
      this.setState ({
        [id + 'Err']: 'Required'
      });
    }
  }

  onChange = ({target: {id, value}}) =>{
    this.input_value[id] = value
    if (value) {
      this.setState ({
        [id + 'Err']: ''
      });
    }
  }

  onSubmit = () =>{
    const emailErrMes = validate([isExist, emailFormat], this.input_value.email)
    const passErrMes = validate([isExist, passwordLength, uppercase, lowercase], this.input_value.password)
    const nameErrMes = validate([nameLength], this.input_value.name)

    if (emailErrMes || passErrMes || nameErrMes){
      this.setState({
        emailErr: emailErrMes,
        passwordErr: passErrMes,
        nameErr: nameErrMes,
      })
    }
  }
  
  render() {
    const {
      location
    } = this.props
    return (
      <div style={styles.container}>
        <div style={styles.panel}>
          <p style={styles.logo}>BIG FISH</p>
          <TextInput id={'email'} onBlur={this.onBlur} onChange={this.onChange} errMes={this.state.emailErr} style={{marginBottom: 8}} placeholder="Email" />
          <TextInput id={'password'} onBlur={this.onBlur} onChange={this.onChange} errMes={this.state.passwordErr } style={{marginBottom: 8}}  placeholder="Password" />
          <Route path='/signup' render={()=>
            <TextInput id={'name'} onBlur={this.onBlur} onChange={this.onChange} errMes={this.state.nameErr} placeholder="Name" />
          } />

          <Button onClick={this.onSubmit} style={{marginTop: 73}} btnText={location.pathname == '/login' ? 'Login': 'Signup'} />

          <div style={styles.placeholder} />

          <div style={styles.footer}>
            <Route path='/signup' render={()=><>
              <p style={styles.footer_text}>Already have an account?&nbsp;&nbsp;</p>
              <Link to='./login'><p style={styles.footer_login}>Login</p></Link></>
            } />
            <Route exact path={['/login', '/']} render={()=><>
              <p style={styles.footer_text}>Don't have an account?&nbsp;&nbsp;</p>
              <Link to='./signup'><p style={styles.footer_login}>Signup</p></Link></>
            } />
          </div>
        </div>
      </div>
    );
  }
}

export default SignInSignUp;
