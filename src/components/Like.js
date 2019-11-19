import React from 'react'
import WhiteBlank from './WhiteBlank'
import Text from './Text'

const styles = {
    container: {
        backgroundColor: '#F4BDB0',
        width: 109,
        height: 30,
        borderRadius: 5,
        // display children
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}

function Like({ liked, num }) {
    const font_style = liked? 's white': 's red';
    return <div style={styles.container}>
        <Text type={font_style}>▲</Text>
        <WhiteBlank w={11}/>
        <Text type={font_style}>Agree {num}</Text>
    </div>
} 

export default Like;