import React, {Component} from 'react';
import styles from './styles/Header'
import Text from './Text'
import './styles/Header.css'

export default class Header extends Component {
    render() {
        const {
            avatarSrc,
        } = this.props;
        return (
            <div style={styles.container}>
                <Text className='logo' type='l RussoOne' style={styles.logo}>BIG FISH</Text>
                <img style={styles.img} src={ avatarSrc } alt='avatar' />
            </div>
        );
    }
}