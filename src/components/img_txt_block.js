import React from "react"
import styles from "./img_txt_block.module.css"

const img_txt_block = (props) => (
    <div 
        className={styles.wrapper}
        style={{backgroundColor: props.backgroundColor}}
    >
        <div className={styles.img_wrapper} style={{backgroundColor: props.bgCol2}}>
            <img src={props.img_src} alt="No alt text for you!"></img>
        </div>
        <div className={styles.text_wrapper} style={{color: props.altColor}}>
            {props.children}
        </div>
    </div>
)

img_txt_block.defaultProps = {
    bgCol2: 'none',
    altColor: '#271f16'
}

export default img_txt_block