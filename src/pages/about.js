import React from "react"
import Footer from "../components/footer.js"
import Navbar from "../components/navbar.js"
import styles from "../styles/index.module.css"
import Background from "../components/background.js"



export default () =>
<div>
    <Navbar/>
    <h1 className={styles.indexTitle}>About</h1>
    <h2 className={styles.indexTitle}>Coming Soon!</h2>
    <Background/>
    <Footer/>
</div>