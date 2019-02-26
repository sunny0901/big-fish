import React, { Component } from 'react';
import styles from "./styles/TextInput";
import Text from './Text'
import { themeColor, shellColor } from '../constants';

export default class TextInput extends Component {

    state = {
        errMes: ''
    }

    _onBlur = ({target: {value}}) =>{ //pass in event
        //console.log('on Blur', value); //***event.target.value
        if (!value) {
            this.setState({errMes: 'Required'});  //this is pointed to the object of TextInput class 绑定最近的this指向的内容
        }
    }

    render() {

        const {
            style,
            placeholder,
        } = this.props;

        const {
            errMes,
        } = this.state;

        return (
            <div style = {{...styles.container, ...style}}> 
                <div>
                    <input onBlur = {this._onBlur} placeholder = {placeholder} style = {styles.input}/>
                    <div style = {styles.line(errMes)}
                    ></div>
                </div>
                <Text type = 'xs err'>{errMes}</Text>
            </div>
        );
    }
}