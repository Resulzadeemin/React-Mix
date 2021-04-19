import React from 'react'
import style from "./Header.module.css"
import Navbar from "../Navbar/Navbar"
import Icon from "../Icon/Icon"
import {useState} from "react"
function Header() {

    const [show,setShow] = useState(false)
    function click(){
        setShow(!show)
    }

    return (
        <div className={style.header}>
            <Navbar />
            <h1>We launch leaders with big ideas</h1>
            <h2 onClick={click}>Click Me Fitness First</h2>
            {
                show ? <h3>A dipisicing elit, sed do eiusmod tempor incididunt ut labore</h3> :null
            }
            <Icon />
        </div>
    )
}

export default Header
