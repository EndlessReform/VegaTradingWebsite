import React from "react"
import styles from "./button.module.css"

const Button = (props) => (
    <p><a className={styles.button} href={props.url}>{props.text}</a></p>
)

export default Button