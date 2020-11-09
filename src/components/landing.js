import React from 'react'
import Header from './header.js'
import styles from './landing.module.css'

const Landing = (props) => (
    <div className={styles.wrapper} style={{backgroundImage: props.bg_image}}>
        <Header />
        {props.children}
    </div>
)

export default Landing