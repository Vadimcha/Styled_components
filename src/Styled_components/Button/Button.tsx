import React from 'react'
import './buttonStyle.sass'

interface buttonProps {
    content: string,
    onclick?: () => void,
    fz?: string,
    theme?: "light" | "dark",
}

export default function Button({ content, onclick=()=>{}, theme="light", fz="min(max(1.5vw, 14px), 20px)" } : buttonProps) {
    let bgColor = (theme == "light" ? "#e8e8e8" : "black")
    let Color = (theme == "light" ? "black" : "#e8e8e8")
    return (
        <button onClick={onclick} className="BUTTON" style={{ fontSize: fz, color: Color, backgroundColor: bgColor }}>
            <p className="BLOCK">{content}</p>
            <p className="FIRST">{content}</p>
            <p className="SECOND">{content}</p>
        </button>
    )
}