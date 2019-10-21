import React, { Component } from 'react'
import styles from './styles/Questions'
import Question from '../components/Question'
import { connect } from 'react-redux';
import { FloatButton } from '../components/Button'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import validate,
{
    isExist,
    questionTitleLength,
    questionContentLength
} from '../utils/validations'
import List from '../components/List'
import { Switch, Route, withRouter } from 'react-router-dom'
import Answers from './Answers'

class Questions extends Component {

    componentDidMount() {
        if (this.props.questions.length == 0) {
            this.props.getAllQuestions();
        }
    }

    render() {
        return (
            <>
                <div style={styles.scrollable}>
                    <Switch>
                        <Route path='/questions/:id' component={ Answers }/>
                        <Route path='/questions' render={() => { return <QuestionList questions={this.props.questions}/> }} />
                    </Switch>
                </div>
                <FloatButton onClick={() => { this._add_Question_Ref.show() }} />
                <AddQuestionContainer userToken={this.props.userToken} ref={this._addQuestionRef} />
            </>
        );
    }

    // the viriable _add_Question_Ref can get the reference to the instance of the component
    _addQuestionRef = (ref) => {
        this._add_Question_Ref = ref;
    }
}

function QuestionList({ questions }) {
    return (
        <div style={styles.panel}>
            <List data={questions} renderRow={question =>
                <Question key={'question_' + question.id}
                    title={question.title}
                    content={question.content}
                    id={question.id}
                />
            } />
        </div>
    )
}

const mapState = state => ({
    questions: state.questions
});

const mapDispatch = (dispatch) => ({   //directly return 
    getAllQuestions: () => dispatch.questions.getAll(),
})

export default withRouter(connect(mapState, mapDispatch)(Questions));

class AddQuestion extends Component {

    static VALIDATIONS = {
        title: [isExist, questionTitleLength],
        content: [questionContentLength]
    }

    constructor(props) {
        super(props);
        this.input_value = {};

    }

    state = {
        titleErr: '',
        contentErr: '',
        visible: false
    };

    render() {
        if (!!this.state.visible) {
            return (
                <div style={styles.container_addQuestion}
                    onClick={this.hide}>
                    <div style={styles.panel_addQuestion}
                        onClick={(e) => e.stopPropagation()}>
                        <TextInput id='title' onBlur={this.onBlur} onChange={this.onChange} errMes={this.state['titleErr']} style={{ ...styles.title_add_question, marginBottom: 8 }} placeholder='Title' />
                        <TextInput id='content' onChange={this.onChange} errMes={this.state['contentErr']} style={styles.content_add_question} placeholder='Content' />
                        <Button onClick={this.onSubmit} style={styles.button_add_question} btnText='Ask' />
                    </div>
                </div>
            )
        } else return null;
    }

    onBlur = ({ target: { id, value } }) => {
        if (!value) {
            this.setState({
                [id + 'Err']: 'Required'
            });
        }
    }

    onChange = ({ target: { id, value } }) => {
        this.input_value[id] = value;
        if (!!value) {
            this.setState({
                [id + 'Err']: ''
            });
        }
    }

    onSubmit = () => {
        let errMsgs = {};
        for (var id in AddQuestion.VALIDATIONS) {
            if (!!this.input_value[id]) {
                errMsgs[id] = validate(AddQuestion.VALIDATIONS[id], this.input_value[id]);
            }
        }
        if (!!checkErr(errMsgs)) {
            this.setState(errMsgs);
        } else {
            // we need to ensure the asynchronous operation in models has finished, so we need to put this in models
            // this.setState({ visible: false });
            this.props.create && this.props.create(
                this.input_value['title'],
                this.input_value['content'],
                this.hide
            )
        }
    }

    show = () => {
        this.setState({ visible: true });
    }

    hide = () => {
        this.setState({ visible: false });
    }
}

const checkErr = obj => {
    for (let key in obj) {
        if (obj[key]) {
            return true;
        }
    }
    return false;
}

const mapDispatchAddQuestion = (dispatch) => ({   //directly return 
    create: (title, content, success_callback) => dispatch.questions.create({ title, content, success_callback }), // since the key == value, abbr
})

const AddQuestionContainer = connect(null, mapDispatchAddQuestion, null, { forwardRef: true })(AddQuestion);