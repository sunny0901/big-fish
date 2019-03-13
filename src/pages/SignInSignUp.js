import React, { Component } from 'react';
import styles from './styles/App'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import { Route, Link, Switch } from 'react-router-dom'
import validate, {
  isExist,
  emailFormat,
  uppercase,
  lowercase,
  passwordLength,
  nameLength,
} from '../utils/validations'

export default class SignInSignUp extends Component {

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.panel}>
          <p style={styles.logo}>BIG FISH</p>
          <Switch>
            <Route exact path={'/signup'} render={() => <SignupForm />} />
            <Route exact path={'/login'} render={() => <LoginForm />} />
          </Switch>

        </div>
      </div>
    );
  }
}

class SignupForm extends Component {
  render() {
    return (
      <BaseForm
        inputs={[
          { id: 'email', placeholder: 'Email', validations: [isExist, emailFormat] },
          { id: 'password', placeholder: 'Passoword', validations: [isExist, passwordLength, uppercase, lowercase] },
          { id: 'name', placeholder: 'Name', validations: [nameLength] }
        ]}
        btnLabel='Signup'
        footerText='Already have an account?'
        link={{
          path: '/login',
          linkName: 'Login'
        }}
      />
    );
  }
}

class LoginForm extends Component {
  render() {
    return (
      <BaseForm
        inputs={[
          { id: 'email', placeholder: 'Email', validations: [isExist] },
          { id: 'password', placeholder: 'Passoword', validations: [isExist] },
        ]}
        btnLabel='Login'
        footerText="Don't have an account?"
        link={{
          path: '/signup',
          linkName: 'Signup'
        }}
      />
    );
  }
}

class BaseForm extends Component {

  constructor(props) { //don't know how many variables do we have
    super(props);
    let temp_state = {};
    this.input_value = {}; //this?
    props.inputs.map(input => {
      temp_state[input.id + 'Err'] = '';
      this.input_value[input.id] = ''
    })
    this.state = temp_state;
  }

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
    let errMsgs = {};
    this.props.inputs.map(input => {
      errMsgs[input.id + 'Err'] = validate(input.validations, this.input_value[input.id]);
    })

    if (errMsgs) {
      this.setState(errMsgs)
    } else {

    }
  }

  render() {
    const {
      inputs,
      btnLabel,
      footerText,
      link: {
        path,
        linkName
      }
    } = this.props;

    return (
      <>
        {inputs.map((input, index) =>
          <TextInput id={input.id} onBlur={this.onBlur} onChange={this.onChange} errMes={this.state[input.id + 'Err']} style={index != inputs.length - 1 && { marginBottom: 8 }} placeholder={input.placeholder} />
        )}

        <Button onClick={this.onSubmit} style={{ marginTop: 73 }} btnText={btnLabel} />

        <div style={styles.placeholder} />

        <div style={styles.footer}>
          <p style={styles.footer_text}>{footerText}&nbsp;&nbsp;</p>
          <Link to={path}><p style={styles.footer_login}>{linkName}</p></Link>
        </div>
      </>
    );
  }
}



