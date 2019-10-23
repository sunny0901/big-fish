import React from 'react'
import './styles/Text.css'

export default function Text({ type, children, className, style }) {
    return <p style={style} className={'text_base ' + type + (className ? ' ' + className : '')}>{children}</p>
};