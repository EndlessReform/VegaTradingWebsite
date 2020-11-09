import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

import styles from "./disclosure.module.css"

const Disclosure = () => (
    <>
    <div className={styles.wrapper}>
        <Header />
        <h1>Disclosure</h1>
        <p>
As of now, we are not able to raise capital for our portfolio or manage investments on behalf of investors.<br />

Our traders do not possess any FINRA licenses, and we do not have licenses/certificates from any U.S. regulatory agency. <br />

Absolutely nothing on this website is investment advice.</p>

    </div>
    <Footer />
    </>
)

export default Disclosure