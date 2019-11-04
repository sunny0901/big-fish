import React, { Component } from 'react'
import styles from './styles/Question'
import Text from '../components/Text'
import { NavLink } from 'react-router-dom'

export default class Question extends Component {
    render() {
        const {
            title,
            content,
            style,
            id
        } = this.props;

        return (
            <NavLink to={`/questions/${id}`} style={{ ...styles.container, style }}>
                <Text type='RobotoMedium' style={{ ...styles.title, marginBottom: 8 }}>{title}</Text>
                <Text style={styles.content}>{content}</Text>
            </NavLink>
        );
    }
}

Question.defaultProps = {
    title: "",
    content: "",
}