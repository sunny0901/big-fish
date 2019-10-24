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
                    <Text className={'light'}>{`Answered ${format(createdat)}`}</Text>
                </div>
            </div>
            <Text style={styles.content}>{content}</Text>
        </div>
    )

    function format(time) {
        const mapping = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        time = time.substring(0, 10);
        let time_arr = time.split('-');
        let year = time_arr[0];
        let month = mapping[time_arr[1] - '0'];
        let day = time_arr[2];
        return `${month} ${day}, ${year}`
    }
}