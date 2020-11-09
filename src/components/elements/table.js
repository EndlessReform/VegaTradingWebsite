import React from "react"
import styles from "./table.module.css"

const Table = (props) => (
    <div className = {styles.table}>
        {props.children}
    </div>
)

export default Table