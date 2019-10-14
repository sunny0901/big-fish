import axios from 'axios'
import { serverAddress } from './constants'

export const questions = {
  state: [],
  reducers: { // pure functions
    //pure functions
    set(state, payload) { //==set: function(){}
      return payload; //state automatically updated right now
    }
  },
  effects: (dispatch) => ({ // impure functions
    getAll: (payload, state) => {
      axios({ // return promise
        method: 'get',
        url: serverAddress + '/questions',
      }).then((response) => { //server send back response
        dispatch.questions.set(response.data.questions);
      })
    },

    create: (payload, state) => {
      if (!state.user_token) {
        alert('You have not logged in!');
        return;
      }
      let request = axios({
        method: 'post',
        url: serverAddress + 'questions',
        headers: {
          'Authorization': JSON.stringify({
            user_token: {
              user_id: state.user_token.user_id,
              key: state.user_token.key
            }
          })
        },
        data: {
          question: {
            title: payload.title,
            content: payload.content
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
          payload.success_callback && payload.success_callback();
          dispatch.questions.getAll();
        } else {
          alert('Something expected happened T_T Please contact admin@bigfish.ca.');
        }
      }, (response) => {
        alert('Something expected happened T_T Please contact admin@bigfish.ca.');
      })
    }
  })
}

export const user_token = {
  state: null,
  reducers: {
    set(state, payload) {
      return payload;
    }
  },
  effects: (dispatch) => ({
    create: (payload, state) => {
      let request = axios({
        method: 'post',
        url: serverAddress + 'user_tokens',
        data: {
          credential: {
            email: payload.email,
            password: payload.password,
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
          dispatch.user_token.set(response.data.user_token);
          // redirect to questions page
          payload.success_callback && payload.success_callback();
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
  })
}

export const users = {
  state: {},
  reducers: {
    set(state, payload) {
      let state_new = { ...state, [payload.id]: payload };
      return state_new;
    }
  },
  effects: (dispatch) => ({
    create: (payload, state) => {
      let request = axios({
        method: 'post',
        url: serverAddress + '/users',
        data: {
          user: {
            email: payload.email,
            password: payload.password,
            name: payload.name
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
          alert('You have signed up!');
          payload.success_callback && payload.success_callback();
          dispatch.users.set(response.data.user);
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
  })
}