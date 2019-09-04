import React from "react"
import Footer from "../components/footer.js"
import Navbar from "../components/navbar.js"
import Background from "../components/background.js"
import styles from "../styles/index.module.css"



export default () =>
<div>
    <Navbar/>
    <h1 className={styles.indexTitle}>Contact</h1>
    <Background/>
    <Footer/>
</div>