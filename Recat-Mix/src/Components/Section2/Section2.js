import React from 'react'
import style from "./Section2.module.css"
import Api from "../Api/Api"
function Section2() {
    return (
        <div className={style.section2}>
            <h1><u>API INFORMATION USERS</u></h1>
            <Api />
        </div>
    )
}

export default Section2
