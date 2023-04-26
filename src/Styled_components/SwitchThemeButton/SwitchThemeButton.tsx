import React, {useState} from 'react'
import {CiDark, CiLight} from "react-icons/ci";
import {useDispatch, useSelector} from "react-redux";
import {switch_theme} from "../../toolkitRedux/toolkitSlice";

interface SwitchThemeButtonProps {
    size?: string,
}

export default function SwitchThemeButton({ size = "max(24px, 2.5vw)" } : SwitchThemeButtonProps) {
    const theme = useSelector((state : any) => state.toolkit.theme)
    const dispatch = useDispatch()
    const [lightIcon, setLightIcon] = useState("white")
    const [darkIcon, setDarkIcon] = useState("black")
    return (
        <div>
            <button onClick={() => dispatch(switch_theme())} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                {
                    (theme === "light" ?
                            <CiDark size={size} color={darkIcon}
                                    onMouseEnter={()=>setDarkIcon("#df9eff")}
                                    onMouseLeave={()=>setDarkIcon("black")}
                                    style={{ transition: "all 0.35s ease-in-out" }}
                            /> :
                            <CiLight size={size} color={lightIcon}
                                     onMouseEnter={()=>setLightIcon("#df9eff")}
                                     onMouseLeave={()=>setLightIcon("white")}
                                     style={{ transition: "all 0.35s ease-in-out" }}
                            />
                    )
                }
            </button>
        </div>
    )
}