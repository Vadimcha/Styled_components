import React, {useState} from 'react'
import {CiDark, CiLight} from "react-icons/ci";
import {useDispatch, useSelector} from "react-redux";
import {switch_theme} from "../../toolkitRedux/toolkitSlice";

export default function SwitchThemeButton() {
    const theme = useSelector((state : any) => state.toolkit.theme)
    const dispatch = useDispatch()
    const [lightIcon, setLightIcon] = useState("white")
    const [darkIcon, setDarkIcon] = useState("black")
    return (
        <div>
            <button onClick={() => dispatch(switch_theme())} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                {
                    (theme === "light" ?
                            <CiDark size={"max(30px, 2vw)"} color={darkIcon}
                                    onMouseEnter={()=>setDarkIcon("#df9eff")}
                                    onMouseLeave={()=>setDarkIcon("black")}
                                    style={{ transition: "all 0.1s ease-in-out" }}
                            /> :
                            <CiLight size={"max(30px, 2vw)"} color={lightIcon}
                                     onMouseEnter={()=>setLightIcon("#df9eff")}
                                     onMouseLeave={()=>setLightIcon("white")}
                                     style={{ transition: "all 0.1s ease-in-out" }}
                            />
                    )
                }
            </button>
        </div>
    )
}