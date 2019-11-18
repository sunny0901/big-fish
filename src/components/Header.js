import React, {Component} from 'react';
import styles from './styles/Header'
import Text from './Text'
import './styles/Header.css'
import { withRouter } from 'react-router'

class Header extends Component {

    onClick = () => {
        this.props.history.go(-1);
    }

    render() {
        const {
            avatarSrc,
        } = this.props;

        return (
            <div style={styles.container}>
                <Text className='logo' type='l RussoOne' style={styles.logo} onClick={this.onClick}>BIG FISH</Text>
                <img style={styles.img} src={ avatarSrc } alt='avatar' />
            </div>
        );
    }
}

export default withRouter(Header);

