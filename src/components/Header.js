import React, {Component} from 'react';
import styles from './styles/Header'
import Text from './Text'

export default class Header extends Component {
    render() {
        const {
            avatarSrc,
        } = this.props;
        return (
            <div style={styles.container}>
                <Text type='l RussoOne' style={styles.logo}>BIG FISH</Text>
                <img  />
            </div>
        );
    }
}