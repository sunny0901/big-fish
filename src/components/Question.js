import React, { Component } from 'react'
import styles from './styles/Question'
import Text from '../components/Text'
import Like from '../components/Like'
import WhiteBlank from '../components/WhiteBlank'
import { Redirect } from 'react-router'


export default class Question extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hovered: false,
            if_refirect: false
        }
    }

    render() {
        const {
            title,
            content,
            style,
            id,
            numOfLikes
        } = this.props;

        if (this.state.if_refirect) {
            return <Redirect to={`/questions/${id}`} />;
        }
        return (
            <div style={{ ...styles.container, style }}>
                <Text type='RobotoMedium' style={{ ...styles.title, opacity: this.state.hovered ? 0.5 : 1 }}
                    onMouseEnter={() => this.setState({ hovered: true })}
                    onMouseLeave={() => this.setState({ hovered: false })}
                    onClick={ () => this.setState({ if_refirect: true })}>{title}</Text>
            <WhiteBlank h={8} />
            <Text style={styles.content}>{content}</Text>
            <WhiteBlank h={8} />
                { numOfLikes != undefined && <Like liked={false} num={numOfLikes} /> }
            </div >
        );
    }
}

Question.defaultProps = {
    title: "",
    content: "",
}