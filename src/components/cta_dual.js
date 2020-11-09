import React from "react"
import { Link } from "gatsby"
import styles from "./cta_dual.module.css"

import right_arrow from "../../public/icons/mono/arrow-right.svg"
const cta = (props) => (
    <div className={styles.wrapper}>
        <div className={styles.block}>
            <h1><Link to={props.dest_1}>{props.cta_1}</Link></h1>
            <img src={right_arrow} alt="Go here!" />
        </div>
        <div className={styles.block}>
            <h1><Link to={props.dest_2}>{props.cta_2}</Link></h1>
            <img src={right_arrow} alt="Go here!" />
        </div>
    </div>
)

export default cta