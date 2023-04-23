import React from 'react'
import './style.sass'

interface buttonProps {
    content: string,
    onclick?: () => void,
    fz?: string,
    theme?: "light" | "dark",
}

export default function Button({ content, onclick=()=>{}, theme="light", fz="0.9em" } : buttonProps) {
    return (
        <button className="BUTTON">
            <p className="BLOCK">{content}</p>
            <p className="FIRST">{content}</p>
            <p className="SECOND">{content}</p>
        </button>
    )
}