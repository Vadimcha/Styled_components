import React, {useState} from 'react'
import Button from '../Button/Button'
import './navigationStyle.sass'

interface navProps {
    logo: React.ReactNode,
    nav: React.ReactNode,
    theme?: "light" | "dark"
}

export default function NavBar({logo, nav, theme="light"} : navProps) {
    const [mini, setMini] = useState(false)
    return (
        <div>
            <div className={"NAVBAR"+(theme == "light" ? "" : " NAVBAR-dark")}>
                <div className={"LOGO"} style={{ color: (theme == "light" ? "black" : "white") }}>{logo}</div>
                <div className={"NAV"}>
                    {nav}
                </div>
            </div>
            <div className={"NAVBAR-mini"+((theme == "light" ? "" : " NAVBAR-dark"))}>
                <div className={"LOGO"} style={{ color: (theme == "light" ? "black" : "white") }}>{logo}</div>
                <Button fz={"max(3.5vw, 16px)"} content={"Menu"} theme={"light"} onclick={() => setMini(!mini)} />
            </div>
            <div className={"NAV-mini"+ (theme == "light" ? " NAV-mini" : " NAV-mini-dark") + (mini ? " NAV-mini-active" : "")}>
                <Button content={"close"} theme={"light"} onclick={() => setMini(!mini) }/>
                {nav}
            </div>
        </div>
    )
}