import React, { Component } from 'react'
import Question from '../components/Question'
import List from '../components/List'
import { connect } from 'react-redux'

class Answers extends Component {

    componentDidMount() {
        const { match: { params: { id } } } = this.props;
        this.props.getAllAnswers(id);
    }
    render() {
        return (
            <>
                <Question />
                {/* <List data={answers} renderRow={ answer => 
                <div>{ answer }</div> } /> */}
            </>
        )
    }
}

const mapState = (state, ownProps) => ({
    answers: state.answers[ownProps.match.params.id]
});

const mapDispatch = dispatch => ({
    getAllAnswers: question_id => dispatch.answers.getAnswers(question_id)
})

export default connect(mapState, mapDispatch)(Answers);