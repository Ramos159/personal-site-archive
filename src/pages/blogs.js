import React from "react"
import Footer from "../components/footer.js"
import Navbar from "../components/navbar.js"
import Background from "../components/background.js"
import styles from "../styles/index.module.css"



export default () =>
<div>
    <Navbar/>
    <h1 className={styles.indexTitle}>Blogs</h1>
    <h2 className={styles.indexTitle}>Coming Soon!</h2>
    <h3 className={styles.indexTitle}>For now see my blogs on Medium <a style={{color:"white"}} href="https://medium.com/@edwinramos269">here</a></h3>
    <Background/>
    <Footer/>
</div>