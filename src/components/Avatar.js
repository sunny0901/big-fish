import React from 'react'
import defaultSrc from '../assets/images/avatar_default.jpg'

export default function Avatar({ size, src }) {
    return (
        <img style={styles.avatar(size)} src={src || defaultSrc} alt='avatar'/>
    )
}

const styles = {
    avatar: size => ({
        width: size,
        height: size,
        borderRadius: '50%',
    })
}