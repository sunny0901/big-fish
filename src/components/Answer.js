import React from 'react'
import Text from './Text'
import styles from './styles/Answer'
import Avatar from './Avatar'

export default function Answer(props) {
    const {
        content,
        createdat,
        avataurl
    } = props;

    return (
        <div >
            <Avatar size={ 63 } src={ avataurl }/>
            <Text>{ 'Name' }</Text>
            <Text style={ styles.time }>{ `Answered ${createdat}` }</Text>
            <Text style={ styles.content }>{ content }</Text>
        </div>
    )
}