import React, { Component } from 'react';
import styles from "./styles/Button";

export default class Button extends Component {
    constructor (props){
        super(props);
        this.state = {hovered: false};
    }

    render () {
        return (
            <button style = {{...styles.button, opacity: this.state.hovered? 0.5 : 1}}
            onMouseEnter = {() =>{
                this.setState({hovered: true});
            }}
            onMouseLeave = {() =>{
                this.setState({hovered: false});
            }}
            >{this.props.btnText}</button>
        );
    }
}