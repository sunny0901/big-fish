import React from 'react'
import Text from './Text'
import styles from './styles/Popups'


export default class Popups extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message:'',
            is_show: false
        }
    }

    open = (message) => this.setState({ message, is_show: true });

    close = () => this.state.is_show && this.setState({ message: '', is_show: false });

    render() {
        const {is_show, message} = this.state;
        return is_show? 
        (<div style={styles.popup_overlay}>
            <div style={styles.popup_panel}> 
            <Text type={'black'}>{message}</Text>
            <img style={styles.icon} src={require('../assets/images/icons/cancel.svg')} onClick={this.close} />
            </div>
        </div>) : null
    }
}