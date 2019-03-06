import React, {Component} from 'react'
import styles from './styles/Questions'
import Header from '../components/Header' 
import Question from '../components/Question'
import Seperator from '../components/Seperator'
import axios from 'axios';
import avatar from '../assets/images/avatar_default.jpg'

export default class Questions extends Component {

    state = {
        questions: ''
    };

    componentDidMount() {
        let request = axios({ // return promise
            method: 'get',
            url: 'https://doublecream-server.herokuapp.com/questions',
        });

        request.then((response) => { //server send back response
            //console.log(response.data.questions[0].title)
            this.setState({
                questions: response.data.questions
            });
        });
    }

    render(){
         return (
            <div style={styles.contanier}>
                <Header avatarSrc={avator}/>
                <div style={styles.panel}>
                {this.state.questions
                ? this.state.questions.map((question) => {
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