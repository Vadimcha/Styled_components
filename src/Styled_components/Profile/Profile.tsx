import React from 'react'
import './profileStyle.sass'

export default function Profile(props : any) {
    return (
        <div>
            <a href="" className={"ProfileImage"}>
                <img src={process.env.PUBLIC_URL + "/images/" + props.img} />
            </a>
        </div>
    )
}