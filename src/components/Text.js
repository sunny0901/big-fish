import React from 'react'
import './styles/Text.css'

export default function Text({type, children, style}){ //deconstruction when pass in props
    return <p style={style} className={'text_base ' + type}>{children}</p>
};