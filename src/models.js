import axios from 'axios'
import { serverAddress } from './constants'

export const questions = {
    state: [],
    reducers: { // pure functions
        //pure functions
        set(state, payload) { //==get: dunction(){}
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
        })}
    })
}