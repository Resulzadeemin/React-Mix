import React from 'react'
import style from "./Api.module.css"
import { useState, useEffect } from "react"
function Api() {

    const [foto, setFoto] = useState([])
    const api = "https://jsonplaceholder.typicode.com"
    useEffect(
        () => {
            fetch("https://jsonplaceholder.typicode.com/users").then(a => a.json()).then(a => setFoto(a))
        },
        [api]
    )

    return (
        <div className={style.api}>
            {
                foto.map(
                    (i) => { return <h1>{i.name},{i.username},{i.phone}</h1> }
                )
            }
        </div>
    )
}

export default Api
