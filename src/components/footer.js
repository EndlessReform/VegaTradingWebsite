import React from 'react'
import { Link } from 'gatsby'
import styles from './footer.module.css'
import logo from '../../public/icons/logo_white.svg'

const Footer = () => (
    <div className={styles.wrapper}>
        <div style={{display: `flex`, alignItems: `center`}}>
            <img className={styles.logo}
                src={logo}
            />
            <div className={`${styles.links} ${styles.links_primary}`}>
                <p><Link to="/">Our Advantage</Link></p>
                <p><Link to="/">Our Team</Link></p>
                <p><Link to="/join">Join Us</Link></p>
            </div>
        </div>
        <div className={`${styles.links} ${styles.links_secondary}`}>
            <p><Link to="/disclosure">Disclosure</Link></p>
            <p><Link to="/contact">Contact Us</Link></p>
        </div>
    </div>
)

export default Footer