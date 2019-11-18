import React from 'react'
import cancel from '../assets/images/icons/cancel.svg'
import add from '../assets/images/icons/add.svg'

const ICONS = {
    cancel,
    add
}

export default function Icon({ type, ...rest }) {
    return <img src={ICONS[type]} {...rest}/>
}