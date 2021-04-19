import React from 'react'
import style from "./Pro.module.css"
import { FaRunning } from "react-icons/fa";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
function Pro(props) {
    return (
        <div className={style.pro}>
            <FaRunning className={style.ico} />
            <h1>{props.name}</h1>
            <p>{props.text}</p>
            <div className={style.more}>
                <article>{props.more}</article>
                <HiOutlineArrowNarrowRight className={style.ico0} />
            </div>
        </div>
    )
}

export default Pro
