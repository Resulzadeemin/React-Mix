import React from 'react'
import style from "./Section1.module.css"
import Pro from "../Pro/Pro"
function Section1() {
    return (
        <div className={style.section0}>
            <div className={style.head}>
                <h1><u>PROPS,ICONS</u></h1>
            </div>
            <div className={style.section1}>
                <Pro name={"Resources"} text={"Ehasily manage your inspiration and work-in-progress by dragging images into projects and sharable client groups. Easily manage your inspiration and "} more={"Explore more"} />
                <Pro name={"Training & Funding"} text={"Ehasily manage your inspiration and work-in-progress by dragging images into projects and sharable client groups. Easily manage your inspiration and "} more={"Browser Traning"} />
                <Pro name={"Connect"} text={"Ehasily manage your inspiration and work-in-progress by dragging images into projects and sharable client groups. Easily manage your inspiration and "} more={"Connect Now"} />
                <Pro name={"Communicate"} text={"Ehasily manage your inspiration and work-in-progress by dragging images into projects and sharable client groups. Easily manage your inspiration and "} more={"Start Now"} />
            </div>
        </div>
    )
}

export default Section1
