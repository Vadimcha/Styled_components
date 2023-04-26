import React, {ReactNode, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import './modelStyle.sass'
import {CiCircleRemove} from "react-icons/ci";

interface ModalProps {
    on_what: ReactNode,
    children: ReactNode
}

export default function Modal({ children, on_what } : ModalProps) {
    const [visible, setVisible] = useState(false)

    const theme = useSelector((state : any) => state.toolkit.theme)
    const [color_close, setColorClose] = useState(theme == "light" ? "black" : "white")
    const [color_menu, setColorMenu] = useState(theme == "light" ? "black" : "white")
    const dispatch = useDispatch()
    return (
        <div>

            <button onClick={() => setVisible(true)}>
                {on_what}
            </button>
            <div className={"backDrop" + " backDrop-" + theme} style={{ display: (visible ? "flex" : "none"), opacity: (visible ? "1" : "0") }}>
                <button className="NAV-mini_close" onClick={() => setVisible(!visible)} >
                    <CiCircleRemove color={color_close} size="32px"
                                    className={"NAV-mini_icon"}
                                    onMouseEnter={()=>setColorClose("#df9eff")}
                                    onMouseLeave={()=>setColorClose(theme == "light" ? "black" : "white")}
                    />
                </button>
                <div className={"Modal" + " Modal-" + theme}>
                    {children}
                </div>
            </div>
        </div>
    )
}