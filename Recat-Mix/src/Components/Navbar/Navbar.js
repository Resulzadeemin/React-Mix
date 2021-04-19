import React from 'react'
import style from "./Navbar.module.css"
import {Link} from "react-router-dom"
import { FcSportsMode } from "react-icons/fc";
function Navbar() {
    return (
        <div className={style.navbar}>
            <FcSportsMode className={style.icon} />
            <Link to="/">Home</Link>
            <Link to="/aboutt">About</Link>
            <Link to="/service">Service</Link>
            <Link to="/faq">Faq</Link>
            <Link to="/contact">Contact</Link>
        </div>
    )
}

export default Navbar
