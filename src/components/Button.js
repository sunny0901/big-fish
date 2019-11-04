import React, { Component } from 'react';
import styles from "./styles/Button";
import './styles/Button.css'
import Icon from './Icon'

export default class Button extends Component {
    constructor(props) {
        super(props);
        this.state = { hovered: false };
    }

    render() {
        const {
            style,
            btnText,
            onClick,
        } = this.props;

        return (
            <button style={{ ...styles.button, opacity: this.state.hovered ? 0.5 : 1, ...style }}
                onClick={onClick}
                onMouseEnter={() => {
                    this.setState({ hovered: true });
                }}
                onMouseLeave={() => {
                    this.setState({ hovered: false });
                }}
            >{btnText}</button>
        );
    }
}

export class FloatButton extends Component {
    render() {
        const { onClick } = this.props;
        return (
            <div className={'container-float-button'} style={styles.container_float_button} onClick={onClick}>
                <Icon style={styles.icon} type={'add'} />
            </div>
        );
    }
}
