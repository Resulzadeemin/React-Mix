import React from 'react'
import style from "./List.module.css"
import{useState} from "react"
function List() {

    const [list,setList] = useState([
        {
            name:"Emin",
            id:1,
            age:"25",
            job:"Programmer",
        },
        {
            name:"Resad",
            id:2,
            age:"26",
            job:"Company",
        },
        {
            name:"Nermin",
            id:3,
            age:"21",
            job:"Teacher",
        },
        {
            name:"Samir",
            id:4,
            age:"29",
            job:"Doctor",
        },
    ])

    return (
        <div className={style.list}>
            {
                list.map(
                    (i)=>{return<h1>Name:{i.name},Age:{i.age},id:{i.id},Job:{i.job}</h1>}
                )
            }
        </div>
    )
}

export default List
