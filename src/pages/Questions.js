import React, { Component } from 'react'
import styles from './styles/Questions'
import Header from '../components/Header'
import Question from '../components/Question'
import Seperator from '../components/Seperator'
import avatar_default from '../assets/images/avatar_default.jpg'
import { connect } from 'react-redux';
import { FloatButton } from '../components/Button'
import {Fragment} from 'react'
import TextInput from '../components/TextInput'
import Button from '../components/Button'

class Questions extends Component {

    componentDidMount() {
        if (this.props.questions.length == 0) {
            this.props.getAllQuestions();
        }
    }

    render() {
        return (
            <div style={styles.contanier}>
                <Header avatarSrc={avatar_default} />
                <div style={styles.panel}>
                    {this.props.questions
                        ? this.props.questions.map((question) => {
                            if (question.id == this.props.questions.length) {
                                return (
                                    <Question key={'question_'+question.id} title={question.title} content={question.content} />
                                );
                            } else {
                                return (
                                    <Fragment key={'fragment_'+question.id}>
                                        <Question key={'question_'+question.id} title={question.title} content={question.content} />
                                        <Seperator key={'seperator_'+question.id}/>
                                    </Fragment>
                                );
                            }
                        })
                        : null}
                </div>
                <FloatButton />
                <AddQuestion />
            </div>
        );
    }
}

class AddQuestion extends Component {
    state = {
        visible: true
    };

    render() {
        if (!!this.state.visible) {
            return (
                <div style={styles.container_addQuestion}
                onClick={this.hide}>
                    <div style={styles.panel_addQuestion}
                    onClick={(e) => e.stopPropagation()}>
                        <TextInput id='title' style={{ ...styles.title_add_question, marginBottom: 8 }} placeholder='Title' />
                        <TextInput id='content' style={styles.content_add_question} placeholder='Content' />
                        <Button style={styles.button_add_question} btnText='Ask' />
                    </div>
                </div>
            )
        } else return null;
    }

    show = () => {
        console.log('show')
        this.setState({ visible: true });
    }

    hide = () => {
        console.log('hide')
        this.setState({ visible: false });
    }
}


const mapState = state => ({
    questions: state.questions
});

const mapDispatch = (dispatch) => ({   //directly return 
    getAllQuestions: () => dispatch.questions.getAll(),
})

export default connect(mapState, mapDispatch)(Questions);