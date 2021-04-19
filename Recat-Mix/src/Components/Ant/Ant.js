import React from 'react'
import style from "./Ant.module.css"
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import run2 from "../Img/run2.jpg"
import run1 from "../Img/run1.jpg"
function Ant() {

    const contentStyle = {
        height: '30vw',
        color: '#fff',
        textAlign: 'center',
    };

    return (
        <div className={style.ant}>
            <Carousel autoplay>
            <div className={style.cour1}>
                    <h3 style={contentStyle}><img src={run2} /></h3>
                </div>
                <div className={style.cour2}>
                    <h3 style={contentStyle}><img src={run1} /></h3>
                </div>
            </Carousel>,
        </div>
    )
}

export default Ant
