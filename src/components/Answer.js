import React from 'react'
import Text from './Text'
import styles from './styles/Answer'
import Avatar from './Avatar'
import WhiteBlank from './WhiteBlank'
import UserFetcher from './UserFetcher'

export default function Answer(props) {
    const {
        content,
        createdat,
        avataurl,
        user_id
    } = props;

    return (
        <div>
        <UserFetcher id={user_id}>
            { (user) => <>
            <div style={styles.head}>
                <Avatar size={63} src={user.avatar_url || avataurl} style={styles.image} />
                <div style={styles.userinfo}>
                    <Text>{user.name || 'no name'}</Text>
                    <WhiteBlank h={5} />
                    <Text className={'light'}>{`Answered ${format(createdat)}`}</Text>
                </div>
            </div>
            <Text style={styles.content}>{content}</Text>
            </> }
        </ UserFetcher>
        </ div>
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