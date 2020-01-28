import React from 'react'
import './Button.css'

export default props =>
    <button onClick={e => props.click && props.click(props.label)}
    className={`
        button
        ${props.operation == null ? '' : 'operation'}
        ${props.double == null ? '' : 'double'}
        ${props.triple == null ? '' : 'triple'}
        `
    }>{props.label}</button>
