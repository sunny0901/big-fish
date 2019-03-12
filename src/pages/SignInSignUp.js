import React, { Component } from 'react';
import styles from './styles/App'
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

export default class SignInSignUp extends Component {



  onBlur = ({ target: { id, value } }) => { //pass in event
    //console.log('on Blur', value); //***event.target.value
    if (!value) {
      this.setState({
        [id + 'Err']: 'Required'
      });
    }
  }

  onChange = ({ target: { id, value } }) => {
    this.input_value[id] = value
    if (value) {
      this.setState({
        [id + 'Err']: ''
      });
    }
  }

  onSubmit = () => {
    const emailErrMes = validate([isExist, emailFormat], this.input_value.email)
    const passErrMes = validate([isExist, passwordLength, uppercase, lowercase], this.input_value.password)
    const nameErrMes = validate([nameLength], this.input_value.name)

    if (emailErrMes || passErrMes || nameErrMes) {
      this.setState({
        emailErr: emailErrMes,
        passwordErr: passErrMes,
        nameErr: nameErrMes,
      })
    }
  }

  clearInput = () => {
    this.setState({
      emailErr: '',
      passwordErr: '',
      nameErr: ''
    })
  }

  render() {
    const {
      location
    } = this.props

    console.log(location);

    return (
      <div style={styles.container}>
        <div style={styles.panel}>
          <p style={styles.logo}>BIG FISH</p>
          {/* <TextInput id={'email'} onBlur={this.onBlur} onChange={this.onChange} errMes={this.state.emailErr} style={{marginBottom: 8}} placeholder="Email" />
          <TextInput id={'password'} onBlur={this.onBlur} onChange={this.onChange} errMes={this.state.passwordErr } style={{marginBottom: 8}}  placeholder="Password" />
          <Route path='/signup' render={()=>
            <TextInput id={'name'} onBlur={this.onBlur} onChange={this.onChange} errMes={this.state.nameErr} placeholder="Name" />
          } />

          <Button onClick={this.onSubmit} style={{marginTop: 73}} btnText={location.pathname == '/login' ? 'Login': 'Signup'} />

          <div style={styles.placeholder} />

          <div style={styles.footer}>
            <Route path='/signup' render={()=><>
              <p style={styles.footer_text}>Already have an account?&nbsp;&nbsp;</p>
              <Link to='./login' onClick={this.clearInput}><p style={styles.footer_login}>Login</p></Link></>
            } />
            <Route exact path={['/login', '/']} render={()=><>
              <p style={styles.footer_text}>Don't have an account?&nbsp;&nbsp;</p>
              <Link to='./signup' onClick={this.clearInput}><p style={styles.footer_login}>Signup</p></Link></>
            } />
          </div> */}
        </div>
      </div>
    );
  }
}

// class BaseForm extends Component {

//   constructor(props) { //don't know how many variables do we have
//     super(props);
//     let temp_state = {};
//     this.input_value = {}; //this?
//     props.inputs.map(input => {
//       temp_state[input.id + 'Err'] = '';
//       this.input_value[input.id] = ''
//     })
//     this.state = temp_state;
//   }

//   render() {
//     const {
//       inputs,
//       btnLabel,
//     } = this.props;

//     return (
//       <>
//         {inputs.map((input, index) => {
//           <TextInput id={input.id} onBlur={this.onBlur} onChange={this.onChange} errMes={this.state[input.id + 'Err']} style={index!=inputs.length-1 && {marginBottom: 8}} placeholder={input.placeholder} />
//         })}

//         <Button onClick={this.onSubmit} style={{ marginTop: 73 }} btnText={btnLabel} />

//         <div style={styles.placeholder} />

//         <div style={styles.footer}>
//           <Route path='/signup' render={() => <>
//             <p style={styles.footer_text}>Already have an account?&nbsp;&nbsp;</p>
//             <Link to='./login' onClick={this.clearInput}><p style={styles.footer_login}>Login</p></Link></>
//           } />
//           <Route exact path={['/login', '/']} render={() => <>
//             <p style={styles.footer_text}>Don't have an account?&nbsp;&nbsp;</p>
//             <Link to='./signup' onClick={this.clearInput}><p style={styles.footer_login}>Signup</p></Link></>
//           } />
//         </div>
//       </>
//     );
//   }
// }
