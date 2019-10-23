import React from 'react'
import Text from './Text'
import styles from './styles/Answer'
import Avatar from './Avatar'
import WhiteBlank from './WhiteBlank'

export default function Answer(props) {
    const {
        content,
        createdat,
        avataurl
    } = props;

    return (
        <div >
            <div style={styles.head}>
                <Avatar size={63} src={avataurl} style={styles.image} />
                <div style={styles.userinfo}>
                    <Text>{'Name'}</Text>
                    <WhiteBlank h={5} />
                    <Text className={'light'}>{`Answered ${createdat}`}</Text>
                </div>
            </div>
            <Text style={styles.content}>{content}</Text>
        </div>
    )
}