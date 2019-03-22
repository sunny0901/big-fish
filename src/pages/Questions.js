import React, {Component} from 'react'
import styles from './styles/Questions'
import Header from '../components/Header' 
import Question from '../components/Question'
import Seperator from '../components/Seperator'
import avatar_default from '../assets/images/avatar_default.jpg'
import { connect } from 'react-redux';

class Questions extends Component {

    componentDidMount() {
        if (this.props.questions == 0) {
            this.props.getAllQuestions();
        }
    }

    render(){
         return (
            <div style={styles.contanier}>
                <Header avatarSrc={avatar_default}/>
                <div style={styles.panel}>
                {this.props.questions
                ? this.props.questions.map((question) => {
                    if (question.id == this.props.questions.length) {
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

const mapState = state => ({
    questions: state.questions
});

const mapDispatch = (dispatch) =>({   //directly return 
    getAllQuestions: () => dispatch.questions.getAll(),
})

export default connect(mapState, mapDispatch)(Questions);