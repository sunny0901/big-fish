import React, { Component } from 'react'
import styles from './styles/Question'
import Text from '../components/Text'
import Like from '../components/Like'
import WhiteBlank from '../components/WhiteBlank'
import { NavLink } from 'react-router-dom'

export default class Question extends Component {
    render() {
        const {
            title,
            content,
            style,
            id,
            numOfLikes
        } = this.props;

        return (
            <NavLink to={`/questions/${id}`} style={{ ...styles.container, style }}>
                <Text type='RobotoMedium' style={styles.title}>{title}</Text>
                <WhiteBlank h={8}/>
                <Text style={styles.content}>{content}</Text>
                <WhiteBlank h={8}/>
                {numOfLikes!=undefined && <Like liked={false} num={numOfLikes}/>}
            </NavLink>
        );
    }
}

Question.defaultProps = {
    title: "",
    content: "",
}