import React from "react"
import Footer from "../components/footer.js"
import Navbar from "../components/navbar.js"
import Background from "../components/background.js"
import styles from "../styles/index.module.css"



export default () =>
<div>
    <Navbar/>
    <h1 className={styles.indexTitle}>Projects</h1>
    <h2 className={styles.indexTitle}>Coming Soon!</h2>
    <h3 className={styles.indexTitle}>For now check my Github <a style={{color:"white"}} rel="noopener noreferrer" target="_blank" href="https://github.com/Ramos159">here</a></h3>
    <h3 className={styles.indexTitle}>Or checkout out one of my live WIP projects <a style={{color:"white"}} rel="noopener noreferrer" target="_blank" href="https://event-hub-site.herokuapp.com/">here</a></h3>
    <Background/>
    <Footer/>
</div>