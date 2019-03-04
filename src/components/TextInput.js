import React, { Component } from 'react';
import styles from "./styles/TextInput";
import Text from './Text'
import { themeColor, shellColor } from '../constants';

export default class TextInput extends Component {


    render() {

        const {
            style,
            errMes,
            ...rest
        } = this.props;

        return (
            <div style={{...styles.container, ...style}}> 
                <div>
                    <input {...rest} style={styles.input}/>
                    <div style={styles.line(errMes)}
                    ></div>
                </div>
                <Text type='xs err'>{errMes}</Text>
            </div>
        );
    }
}