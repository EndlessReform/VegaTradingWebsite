import React from "react"
import styles from "./section_header.module.css"

const section_header = (props) => (
    <div className={styles.wrapper}>
        <div className={styles.text}>
            <h2 className={styles.topline}>{props.topline}</h2>
            <h1>{props.bottomline}</h1>
        </div>
    </div>
)

export default section_header