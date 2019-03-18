import React, {Component} from 'react'
import styles from './styles/Questions'
import Header from '../components/Header' 
import Question from '../components/Question'
import Seperator from '../components/Seperator'
import axios from 'axios'
import avatar_default from '../assets/images/avatar_default.jpg'
import {serverAddress} from '../constants'

export default class Questions extends Component {

    state = {
        questions: ''
    };

    componentDidMount() {
        let request = axios({ // return promise
            method: 'get',
            url: serverAddress + '/questions',
        });

        request.then((response) => { //server send back response
            console.log(response)
            this.setState({
                questions: response.data.questions
            });
        });
    }

    render(){
         return (
            <div style={styles.contanier}>
                <Header avatarSrc={avatar_default}/>
                <div style={styles.panel}>
                {this.state.questions
                ? this.state.questions.map((question) => {
                    if (question.id == this.state.questions.length) {
                        return (
                            <Question title={question.title} content={question.content}/>
                        );
                    }
                    return (
                        <>
                        <Question title={question.title} content={question.content}/>
                        <Seperator />
                        </>
                    );
                })
                : null }
                </div>
            </div>
         );
    }
}
