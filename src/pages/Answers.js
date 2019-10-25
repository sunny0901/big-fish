import React, { Component } from 'react'
import Question from '../components/Question'
import List from '../components/List'
import { connect } from 'react-redux'
import question_style from './styles/Questions'
import styles from './styles/Answers'
import Answer from '../components/Answer'
import avatar from '../assets/images/avatar_default.jpg'
import { answerContentLength, isExist } from '../utils/validations'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import WhiteBlank from '../components/WhiteBlank'
import { FloatButton } from '../components/Button'
import style from './styles/Questions'

class Answers extends Component {

    componentDidMount() {
        const { match: { params: { id } } } = this.props;
        this.props.getAllAnswers(id);
    }

    render() {
        const { question, answers } = this.props;
        return (
            <>
                <div style={question_style.panel}>
                    {question && <Question title={question.title}
                        content={question.content}
                        id={question.id} />}
                </div>
                <AddAnswer ref={this._addAnswerRef} />
                <FloatButton style={style.button_add_question} onClick={() => { this._add_Answer_Ref.show() }} />
                <div style={styles.panel}>
                    <List data={answers} renderRow={answer =>
                        <Answer content={answer.content}
                            createdat={answer.created_at}
                            avataurl={avatar}
                        />} />
                </div>
            </>
        )
    }

    _addAnswerRef = (ref) => {
        this._add_Answer_Ref = ref;
    }
}

class AddAnswer extends Component {
    constructor(props) {
        super(props);
        this.input_value = '';
    }

    static VALIDATIONS = [isExist, answerContentLength];

    state = {
        contentErr: '',
        visible: false
    }

    render() {
        if (this.state.visible) {
            return (
                <>
                    <div style={styles.addContainer}>
                        <WhiteBlank h={16} />
                        <TextInput id='content' onBlur={this.onBlur} onChange={this.onChange} errMes={this.state.contentErr} style={styles.add_answer_content} placeholder='Write your answer...' />
                        <WhiteBlank h={164} />
                        <Button onClick={this.onSubmit} style={styles.add_answer_button} btnText='Answer' />
                    </div>
                </>
            )
        } else return null;
    }

    onBlur = ({target: {id, value}}) => {
        if (!value) {
            this.setState({ 
                contentErr: 'Required'
             });
        }
    }

    onChange = ({target: {id, value}}) => {
        this.input_value = value;
        if (!!value) {
            this.setState({ 
                contentErr: ''
             });
        }
    }

    onSubmit = () => {

    }

    show = () => {
        this.setState({ visible: true })
    }

    hide = () => {
        this.setState({ visible: false })
    }
}

const mapState = (state, ownProps) => ({
    question: state.questions.find((q) => q.id == ownProps.match.params.id),
    answers: state.answers[ownProps.match.params.id]
});

const mapDispatch = dispatch => ({
    getAllAnswers: question_id => dispatch.answers.getAnswers(question_id),
    createAnswer: ({ id, content }) => dispatch.answers.create({ id, content })
})

export default connect(mapState, mapDispatch)(Answers);