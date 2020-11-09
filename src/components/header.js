import React from "react"
import styles from "./header.module.css"
import logo from "../../public/icons/logo_white.svg"
import hamburger from "../../public/icons/mono/menu.svg"

const Header = () => (
    <div className = {styles.wrapper}>
        <img src={logo} className = {styles.logo} alt="Vega Trading" />
        <img src={hamburger} alt="More options" />
    </div>
)

export default Header