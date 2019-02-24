import React, { Component } from 'react';
import styles from "./styles/Button";
import { themeColor } from '../constants';

export default class Button extends Component {
    constructor (props){
        super(props);
        this.state = {hovered: false};
    }

    render () {
        const {
            style,
            btnText,
        } = this.props;

        return (
            <button style = {{...styles.button, opacity: this.state.hovered? 0.5 : 1, ...style}}
            onMouseEnter = {() =>{
                this.setState({hovered: true});
            }}
            onMouseLeave = {() =>{
                this.setState({hovered: false});
            }}
            >{btnText}</button>
        );
    }
}