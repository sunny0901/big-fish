import React, { Component } from 'react'
import styles from './styles/Question'
import Text from '../components/Text'

export default class Question extends Component {
    render() {
        const {
            title,
            content,
            style,
        } = this.props;

        return (
            <div style={{...styles.container, style}}>
                <Text type='RobotoMedium' style={{...styles.title, marginBottom:8}}>{title}</Text>
                <Text style={styles.content}>{content}</Text>
            </div>
        );
    }
}

Question.defaultProps = {  //???
    title: "",
    content: "",
}