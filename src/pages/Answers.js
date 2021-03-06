import React, { Component } from 'react'
import Question from '../components/Question'
import List from '../components/List'
import { connect } from 'react-redux'
import question_style from './styles/Questions'
import styles from './styles/Answers'
import Answer from '../components/Answer'
import { answerContentLength, isExist } from '../utils/validations'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import WhiteBlank from '../components/WhiteBlank'
import { FloatButton } from '../components/Button'
import style from './styles/Questions'
import validate from '../utils/validations'
import Text from '../components/Text'

class Answers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fetched: false
        }
    }

    fetch_success_callback = () => {
        this.setState({
            fetched: true
        })
    }

    componentDidMount() {
        const { match: { params: { id } } } = this.props;
        this.props.getAllAnswers(id, this.fetch_success_callback);
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
                <AddAnswerContainer ref={this._addAnswerRef} match={this.props.match}/>
                <FloatButton style={style.button_add_question} onClick={() => { this._add_Answer_Ref.show() }} />
                <div style={styles.panel}>
                    <List data={answers} 
                    renderRow={answer =>
                        <Answer key={'answer_'+answer.id}
                            content={answer.content}
                            createdat={answer.created_at}
                            user_id={answer.user_id}
                            numOfLikes={answer.number_of_likes}
                        />}
                    renderEmpty={() => { return this.state.fetched? <Text type="light">no more answers</Text> : null}}
                     />
                </div>
            </>
        )
    }

    _addAnswerRef = (ref) => {
        this._add_Answer_Ref = ref;
    }
}

const mapState = (state, ownProps) => ({
    question: state.questions.find((q) => q.id == ownProps.match.params.id),
    answers: state.answers[ownProps.match.params.id]
});

const mapDispatch = dispatch => ({
    getAllAnswers: ( question_id, success_callback ) => dispatch.answers.getAnswers({ question_id, success_callback }),
})

export default connect(mapState, mapDispatch)(Answers);

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
        const {
            createAnswer,
            match: {
                params: { id }
            }
        } = this.props;
        let errMes = '';
        if (!!this.input_value) {
            errMes = validate(AddAnswer.VALIDATIONS, this.input_value);
        }
        if (!!errMes) {
            this.setState({ contentErr: errMes });
        } else {
            createAnswer(id, this.input_value, this.hide);
        }
    }

    show = () => {
        this.setState({ visible: true })
    }

    hide = () => {
        this.input_value = '';
        this.setState({ visible: false })
    }

}

const mapDispatchAddAnswer = dispatch => ({
    getAllAnswers: question_id => dispatch.answers.getAnswers(question_id),
    createAnswer: ( id, content, hide ) => dispatch.answers.create({ id, content, hide })
})

const AddAnswerContainer =  connect(mapState, mapDispatchAddAnswer, null, { forwardRef: true })(AddAnswer);