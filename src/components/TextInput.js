import React, { Component } from 'react';
import styles from "./styles/TextInput";
import Text from './Text'

export default class TextInput extends Component {

    state = {
        errMes: '',
    }

    _onBlur = ({target: {value}}) =>{ //pass in event
        console.log('on Blur', value); //***event.target.value
        if (!value) {
            this.setState({errMes: 'Required'});  //this is pointed to global now
        }
    }

    render() {

        const {
            style,
            placeholder,
        } = this.props;

        return (
            <div style = {{...styles.container, ...style}}> 
                <div>
                    <input onBlur = {this._onBlur} placeholder = {placeholder} style = {styles.input}/>
                    <div style = {styles.line}
                    ></div>
                </div>
                <Text type = 'xs err'>{this.state.errMes}</Text>
            </div>
        );
    }
}