import React, { useEffect, useRef } from 'react';
import './style.sass'
import {exists} from "fs";

interface linkProps {
    content: string,
    href: string,
    theme?: "light" | "dark",
    fz?: string,

}

export default function Link({ content, href, theme = "light", fz = "1.2em" }: linkProps) {
    return (

        <div className="ssilka" style={{fontSize: fz }}>
            <p className="BLOCK">{content}</p>
            <a href={href} style={{ color: (theme == "light" ? "black" : "white") }} className={"FIRST"}>{content}</a>
            <a href={href} className={"SECOND"}>{ content }</a>
        </div>
    );
}