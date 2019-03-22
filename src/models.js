import axios from 'axios'
import { serverAddress } from './constants'

export const questions = {
    state: [],
    reducers: {
        //pure functions
        get(state, payload) { //==get: dunction(){}
            return payload; //state automatically updated right now
        }
    },
    effects: (dispatch) => ({
        getAll: (payload, state) => {
            axios({ // return promise
                method: 'get',
                url: serverAddress + '/questions',
            }).then((response) => { //server send back response
                dispatch.questions.get(response.data.questions);
        })}
    })
}