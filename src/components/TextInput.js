import React, { Component } from 'react';
import styles from "./styles/TextInput";

export default class TextInput extends Component {

    render() {
        const {
            style,
            placeholder,
        } = this.props;

        return (
            <div style = {{...styles.container, ...style}}>
                <div>
                    <input placeholder = {placeholder} style = {styles.input}/>
                    <div style = {styles.line}></div>
                </div>
                <p style = {styles.err_mess}>error</p>
            </div>
        );
    }
}