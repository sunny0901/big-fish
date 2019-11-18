import React from 'react'
import Text from './Text'
import styles from './styles/Answer'
import Avatar from './Avatar'
import WhiteBlank from './WhiteBlank'
import UserFetcher from './UserFetcher'
import Like from './Like'
import question_style from './styles/Question'

export default function Answer(props) {
    const {
        content,
        createdat,
        user_id,
        numOfLikes,
    } = props;

    return (
        <div style={question_style.container}>
            <div style={styles.head}>
                <UserFetcher id={user_id}>
                    {(user) =>
                        <>
                            <Avatar size={63} src={user.avatar_url} style={styles.image} />
                            <WhiteBlank w={14} />
                            <div style={styles.userinfo}>
                                <Text>{user.name || 'no name'}</Text>
                                <WhiteBlank h={5} />
                                <Text className={'light'}>{`Answered ${format(createdat)}`}</Text>
                            </div>
                        </> 
                    }
                </ UserFetcher>
            </div>
            <Text style={styles.content}>{content}</Text>
            <WhiteBlank h={8} />
            {numOfLikes != undefined && <Like num={numOfLikes} />}
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