import React from 'react'
import style from "./Icon.module.css"
import { GiPassport } from "react-icons/gi";
import { GiBoxingGlove } from "react-icons/gi";
import { BiRun } from "react-icons/bi";
function Icon() {
    return (
        <div className={style.icons}>
            <GiPassport className={style.ic1}/>
            <GiBoxingGlove className={style.ic2}/>
            <BiRun className={style.ic3}/>

        </div>
    )
}

export default Icon
