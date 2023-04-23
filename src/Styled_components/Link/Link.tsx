import React from 'react';
import './linkStyle.sass'

interface linkProps {
    content: string,
    href: string,
    theme?: "light" | "dark",
    fz?: string,

}

export default function Link({ content, href, theme = "light", fz = "min(max(1.5vw, 14px), 20px)" }: linkProps) {
    return (

        <div className="ssilka" style={{fontSize: fz }}>
            <p className="BLOCK">{content}</p>
            <a href={href} style={{ color: (theme == "light" ? "black" : "white") }} className={"FIRST"}>{content}</a>
            <a href={href} className={"SECOND"}>{ content }</a>
        </div>
    );
}