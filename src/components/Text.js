import React from 'react'
import './styles/Text.css'

export default function Text({ type, children, className, ...rest}) {
    return <p className={'text_base ' + type + (className ? ' ' + className : '')} {...rest}>{children}</p>
};