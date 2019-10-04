import React, { Component } from 'react';
import styles from './styles/App'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import { Route, Link, Switch, Redirect } from 'react-router-dom'
import axios from 'axios'
import validate, {
  isExist,
  emailFormat,
  uppercase,
  lowercase,
  passwordLength,
  nameLength,
} from '../utils/validations'
import { serverAddress } from '../constants'

export default class SignInSignUp extends Component {

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.panel}>
          <p style={styles.logo}>BIG FISH</p>
          <Switch>
            <Route exact path={['/signup', '/']} render={() => <SignupForm />} />
            <Route exact path={'/login'} render={() => <LoginForm />} />
          </Switch>
        </div>
      </div>
    );
  }
}

class SignupForm extends Component {
  state = {
    if_redirect: false,
  }

  render() {
    if (this.state.if_redirect) {
      return <Redirect to='/login' />
    }
    return (
      <BaseForm
        inputs={[
          { id: 'email', placeholder: 'Email', validations: [isExist, emailFormat] },
          { id: 'password', type: 'password', placeholder: 'Passoword', validations: [isExist, passwordLength, uppercase, lowercase] },
          { id: 'name', placeholder: 'Name', validations: [nameLength] }
        ]}
        btnLabel='Signup'
        footerText='Already have an account?'
        link={{
          path: '/login',
          linkName: 'Login'
        }}
        onSubmit={this.onSubmit}
      />
    );
  }

  onSubmit = (input_value) => {
    let request = axios({
      method: 'post',
      url: serverAddress + '/users',
      data: {
        user: {
          email: input_value['email'],
          password: input_value['password'],
          name: input_value['name']
        }
      },
      validateStatus: (status) => {
        if (status >= 200 && status < 300 || status >= 400 && status < 500) { //go to resolve
          return true;
        } else {
          return false;
        }
      }
    });

    request.then((response) => {
      if (response.status == 201) {
        this.setState({ if_redirect: true });
      } else if (response.status == 400) {
        if (response.data.errors[0].code == 'duplicated_field') {
          alert('The email has been registered!');
        } else {
          alert('Something expected happened T_T Please contact admin@bigfish.ca.');
        }
      }
    }, (response) => {
      alert('Something expected happened T_T Please contact admin@bigfish.ca.');
    })
  }

}

class LoginForm extends Component {
  state = {
    if_redirect: false
  }

  render() {
    if (this.state.if_redirect) {
      this.props.onLogin && this.props.onLogin(this.response.data.user_token);
      return <Redirect to='/questions' />
    }
    return (
      <BaseForm
        inputs={[
          { id: 'email', placeholder: 'Email', validations: [isExist] },
          { id: 'password', type: 'password', placeholder: 'Passoword', validations: [isExist] },
        ]}
        btnLabel='Login'
        footerText="Don't have an account?"
        link={{
          path: '/signup',
          linkName: 'Signup'
        }}
        onSubmit={this.onSubmit}
      />
    );
  }
  onSubmit = (input_value) => {
    let request = axios({
      method: 'post',
      url: serverAddress + 'user_tokens',
      data: {
        credential: {
          email: input_value.email,
          password: input_value.password,
        }
      },
      validateStatus: (status) => {
        if (status >= 200 && status < 300 || status >= 400 && status < 500) { //go to resolve
          return true;
        } else {
          return false;
        }
      }
    });
    request.then((response) => {
      if (response.status == 201) {
        this.setState({ if_redirect: true });
      } else if (response.status == 400) {
        if (response.data.errors[0].code == 'invalid_credential') {
          alert('Email or password is wrong!');
        } else {
          alert('Something expected happened T_T Please contact admin@bigfish.ca.');
        }
      }
    }, (response) => {
      alert('Something expected happened T_T Please contact admin@bigfish.ca.');
    })
  }
}

class BaseForm extends Component {

  static defaultProps = {
    inputs: [],
    btnLabel: 'Confirm',
    footerText: 'default footer text',
    footerLink: { path: '/login', displayName: 'Login' },
    onSubmit: () => { }
  }

  constructor(props) { //don't know how many variables do we have
    super(props);
    let temp_state = {};
    this.input_value = {};
    props.inputs.map(input => {
      temp_state[input.id + 'Err'] = '';
      this.input_value[input.id] = ''
    })
    this.state = temp_state;
  }

  onBlur = ({ target: { id, value } }) => { //pass in event
    if (!value) {
      this.setState({
        [id + 'Err']: 'Required'
      });
    }
  }

  onChange = ({ target: { id, value } }) => {
    this.input_value[id] = value;
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

    if (checkErr(errMsgs)) {
      this.setState(errMsgs);
    } else {
      this.props.onSubmit(this.input_value);
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
        {inputs.map(({ id, validations, ...rest }, index) =>
          <TextInput id={id} onBlur={this.onBlur} onChange={this.onChange} errMes={this.state[id + 'Err']} style={index != inputs.length - 1 && { marginBottom: 8 }} {...rest} />
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

const checkErr = obj => {
  for (let key in obj) {
    if (obj[key]) {
      return true;
    }
  }
  return false;
}



