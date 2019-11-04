import axios from 'axios'
import { serverAddress } from './constants'
import Popup from './modules'

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
      callAPI({
        uri: '/questions',
        errorHandler: status => status == 404,
      }).then(response => { //server send back response
          if (response.status == 200) {
            dispatch.questions.set(response.data.questions); // data send to payload
          } else if (response.status == 404) {
            dispatch.questions.set([]);
          }
        })
    },
    create: (payload, state) => {
      if (!state.user_token) {
        alert('You have not logged in!');
        return;
      }
      callAPI({
        method: 'post',
        uri: 'questions',
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
      }).then(response => {
        payload.success_callback && payload.success_callback();
        dispatch.questions.getAll();
      })
    }
  })
}

export const user_token = {
  state: JSON.parse(localStorage.getItem('user_token')),
  reducers: {
    set(state, payload) {
      return payload;
    }
  },
  effects: (dispatch) => ({
    create: (payload, state) => {
      callAPI({
        method: 'post',
        uri: 'user_tokens',
        data: {
          credential: {
            email: payload.email,
            password: payload.password,
          }
        },
        errorHandler: status => status == 400,
      }).then(response => {
        if (response.status == 201) {
          dispatch.user_token.set(response.data.user_token);
          // html5 
          localStorage.setItem('user_token', JSON.stringify(response.data.user_token));
          // redirect to questions page
          payload.success_callback && payload.success_callback();
        } else if (response.status == 400) {
          if (response.data.errors[0].code == 'invalid_credential') {
            Popup.open('Email or password is wrong!');
          } else {
            alert('Something expected happened T_T Please contact admin@bigfish.ca.');
          }
        }
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
      callAPI({
        method: 'post',
        uri: '/users',
        data: {
          user: {
            email: payload.email,
            password: payload.password,
            name: payload.name
          }
        },
        errorHandler: status => status == 400,
      }).then(response => {
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
      })
    },
    async getUser(payload, rootState){
      const response = await callAPI({
        uri: `users/${payload}`,
        headers: {
          'Authorization': JSON.stringify({
            user_token: {
              user_id: rootState.user_token.user_id,
              key: rootState.user_token.key
            }
          })
        },
        errorHandler: status => status == 404
      });
      if (response.status == 200) {
        dispatch.users.set(
          response.data.user
        )
      }
    }
  })
}

export const answers = {
  state: {},
  reducers: {
    update(state, payload) {
      return {
        ...state,
        ...payload
      }
    }
  },
  effects: dispatch => ({
    async getAnswers(payload, rootState) {
      const response = await callAPI({
        uri: `questions/${payload}/answers`,
        headers: {
          'Authorization': JSON.stringify({
            user_token: {
              user_id: rootState.user_token.user_id,
              key: rootState.user_token.key
            }
          })
        },
        errorHandler: status => status == 404
      });
      if (response.status == 200) {
        dispatch.answers.update({
          [payload]: response.data.answers
        })
      } else if(response.status == 404) {
        dispatch.answers.update({});
      }
    },
    async create(payload, rootState) {
      const response = await callAPI({
        uri: `questions/${payload.id}/answers`,
        method: 'post',
        headers: {
          'Authorization': JSON.stringify({
            user_token: {
              user_id: rootState.user_token.user_id,
              key: rootState.user_token.key
            }
          })
        },
        data: {
          answer: {
            content: payload.content
          }
        }
      })
      if (response.status == 201) {
        payload.hide();
        dispatch.answers.getAnswers(payload.id);
      }
    }
  })
}

function callAPI({ method = 'get', uri, errorHandler = () => false, headers, data }) {
  const request = axios({ // return promise
    headers,
    data,
    method,
    url: serverAddress + uri,
    validateStatus: function (status) {
      return (status >= 200 && status < 300 || errorHandler(status));
    }
  })
  
  return request.catch((error) => { // catch can return promise
    alert('Something expected happened T_T Please contact admin@bigfish.ca.');
  })
}