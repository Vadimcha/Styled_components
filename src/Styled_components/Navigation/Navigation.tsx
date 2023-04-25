import React, {useState} from 'react'
import './navigationStyle.sass'
import {CiCircleRemove, CiMenuBurger} from "react-icons/ci"

interface navProps {
    logo: React.ReactNode | string,
    nav: React.ReactNode,
    theme?: "light" | "dark"
}

export default function NavBar({logo, nav, theme="light"} : navProps) {
    const [mini, setMini] = useState(false)
    const [color_close, setColorClose] = useState(theme == "light" ? "black" : "white")
    const [color_menu, setColorMenu] = useState(theme == "light" ? "black" : "white")
    return (
        <div>
            <div className={"NAVBAR"+(theme == "light" ? "" : " NAVBAR-dark")}>
                <div className={"LOGO"} style={{ color: (theme == "light" ? "black" : "white"), fontSize: "max(1.7vw, 16px)", fontWeight: "bold" }}>{logo}</div>
                <div className={"NAV"}>
                    {nav}
                </div>
            </div>
            <div className={"NAVBAR-mini"+((theme == "light" ? "" : " NAVBAR-dark"))}>
                <div className={"LOGO"} style={{ color: (theme == "light" ? "black" : "white") }}>{logo}</div>
                <button className="NAVBAR-mini_menu" onClick={() => setMini(!mini)}>
                    <CiMenuBurger color={color_menu} size={"32px"}
                                  className={"NAVBAR-mini_icon"}
                                  onMouseEnter={()=>setColorMenu("#df9eff")}
                                  onMouseLeave={()=>setColorMenu(theme == "light" ? "black" : "white")}
                    />
                </button>
            </div>
            <div className={"NAV-mini"+ (theme == "light" ? " NAV-mini" : " NAV-mini-dark") + (mini ? " NAV-mini-active" : "")}>
                <button className="NAV-mini_close" onClick={() => setMini(!mini)} >
                    <CiCircleRemove color={color_close} size="32px"
                                    className={"NAV-mini_icon"}
                                    onMouseEnter={()=>setColorClose("#df9eff")}
                                    onMouseLeave={()=>setColorClose(theme == "light" ? "black" : "white")}
                    />
                </button>
                <div className={"NAV-mini_links"}>{nav}</div>
            </div>
        </div>
    )
}