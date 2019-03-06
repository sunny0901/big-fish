import React, {Component} from 'react'
import styles from './styles/Questions'
import Header from '../components/Header' 
import Question from '../components/Question'

export default class Questions extends Component {
    render(){
        return(
            <div style={styles.contanier}>
                <Header />
                <div style={styles.panel}>
                    <Question title='cheiowhnbfrilh2uicfghoiw' content='fvewhjgfl3'/>
                </div>
            </div>
        );
    }
}