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
        })},

        create: (payload, state) => {
            let request = axios({
                method: 'post',
                url: serverAddress + 'questions',
                headers: {
                    'Authorization': JSON.stringify({
                        user_token: {
                            user_id: payload.user_token.user_id,
                            key: payload.user_token.key
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
    effects: {
        
    }
}