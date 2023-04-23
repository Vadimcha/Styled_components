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
        <div className={"BUTTON"} style={{ fontSize: fz }}>
            <p className={"BLOCK"}>{content}</p>
            <button onClick={onclick} className={"FIRST"}>{content}</button>
            <button onClick={onclick} className={"SECOND"}>{content}</button>
        </div>
    )
}