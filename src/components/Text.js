import React from 'react'
import './styles/Text.css'

export default function Text({type, children}){
    return <p className = {'text_base' + type}>{children}</p>
};