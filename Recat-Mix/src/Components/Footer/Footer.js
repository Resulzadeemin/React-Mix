import React from 'react'
import style from "./Footer.module.css"
import List from "../Listrender/List"
import Todo from "../Todoapp/Todo"
function Footer() {
    return (
        <div className={style.footer}>
            <div className={style.foot}>
                <h1><u>FOOTER,LIST RENDER-TODO APP</u></h1>
            </div>
            <List />
            <Todo />
        </div>
    )
}

export default Footer
