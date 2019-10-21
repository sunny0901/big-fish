import React, { Component } from 'react'
import Question from '../components/Question'
import List from '../components/List'
import { connect } from 'react-redux'
import question_style from './styles/Questions'
import styles from './styles/Answers'
import Answer from '../components/Answer'
import avatar from '../assets/images/avatar_default.jpg'

class Answers extends Component {

    componentDidMount() {
        const { match: { params: { id } } } = this.props;
        this.props.getAllAnswers(id);
    }ß
    render() {
        const { question, answers } = this.props;
        return (
            <>
                <div style={question_style.panel}>
                    {question && <Question title={question.title}
                        content={question.content}
                        id={question.id} />}
                </div>
                <div style={styles.panel}>
                    <List data={answers} renderRow={answer =>
                         <Answer content={answer.content} 
                         createdat={answer.created_at}
                         avataurl={avatar}
                         /> }/>
                </div>
            </>
        )
    }
}

const mapState = (state, ownProps) => ({
    question: state.questions.find((q) => q.id == ownProps.match.params.id),
    answers: state.answers[ownProps.match.params.id]
});

const mapDispatch = dispatch => ({
    getAllAnswers: question_id => dispatch.answers.getAnswers(question_id)
})

export default connect(mapState, mapDispatch)(Answers);