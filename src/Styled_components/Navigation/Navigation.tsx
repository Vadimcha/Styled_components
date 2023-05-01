import React, {useState} from 'react'
import './navigationStyle.sass'
import {CiCircleRemove, CiMenuBurger} from "react-icons/ci"
import ThemeBtn from "../SwitchThemeButton/SwitchThemeButton";

interface navProps {
    logo: React.ReactNode | string,
    nav: React.ReactNode,
    theme?: "light" | "dark",
    profile?: React.ReactNode
}

export default function NavBar({logo, nav, theme="light", profile} : navProps) {
    const [mini, setMini] = useState(false)
    const [color_close, setColorClose] = useState(theme == "light" ? "black" : "white")
    const [color_menu, setColorMenu] = useState(theme == "light" ? "black" : "white")
    return (
        <div>
            <div className={"NAVBAR"+(theme == "light" ? "" : " NAVBAR-dark")}>
                <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
                    <div className={"LOGO"} style={{ color: (theme == "light" ? "black" : "white"), fontWeight: "bold" }}>{logo}</div>
                    <ThemeBtn />
                </div>
                <div>
                    <div className={"NAV"}>
                        {nav}
                        {profile}
                    </div>
                </div>
            </div>
            <div className={"NAVBAR-mini"+((theme == "light" ? "" : " NAVBAR-dark"))}>
                <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
                    <div className={"LOGO"} style={{ color: (theme == "light" ? "black" : "white"), fontSize: "min(5vw, 20px)", fontWeight: "bold" }}>{logo}</div>
                </div>
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
                <div className={"NAV-mini_links"}>
                    {nav}
                    {profile}
                    <ThemeBtn size={"36"}/>
                </div>

            </div>
        </div>
    )
}