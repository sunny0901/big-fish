import React, { Component } from 'react'
import Question from '../components/Question'
import List from '../components/List'
import { connect } from 'react-redux'

class Answers extends Component {

    componentDidMount() {
        console.log(this.props.match.params.id)
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

const mapState = (state, own_props) => ({
    answers: state.answers[own_props.match.params.id]
});

const mapDispatch = dispatch => ({
    getAllAnswers: question_id => dispatch.answers.getAnswers(question_id)
})

export default connect(mapState, mapDispatch)(Answers);