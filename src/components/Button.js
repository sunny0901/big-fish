import React, { Component } from 'react';
import styles from "./styles/Button";
import { themeColor } from '../constants';
import './styles/Button.css'

export default class Button extends Component {
    constructor (props){
        super(props);
        this.state = {hovered: false};
    }

    render () {
        const {
            style,
            btnText,
            onClick,
        } = this.props;

        return (
            <button style={{...styles.button, opacity: this.state.hovered? 0.5 : 1, ...style}}
            onClick={onClick}
            onMouseEnter={() =>{
                this.setState({hovered: true});
            }}
            onMouseLeave={() =>{
                this.setState({hovered: false});
            }}
            >{btnText}</button>
        );
    }
}

export class FloatButton extends Component {
    render() {
        return (
            <div className={'container-float-button'} style={styles.container_float_button}>
                <img style={styles.icon} src={require('../assets/images/icons/add.svg')}/>
            </div>
        );
    }
}
