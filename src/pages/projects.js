import React from "react"
import Footer from "../components/footer.js"
import Navbar from "../components/navbar.js"
import Background from "../components/background.js"
import styles from "../styles/index.module.css"



export default () =>
<div style={{  position: "relative",
  minHeight: "100vh"}}>
    <Navbar/>
    <h1 className={styles.indexTitle}>Projects</h1>
    <h2 className={styles.indexTitle}>Coming Soon!</h2>
    <h3 className={styles.indexTitle}>For now check my Github <a style={{color:"white"}} rel="noopener noreferrer" target="_blank" href="https://github.com/Ramos159">here</a></h3>
    <h3 className={styles.indexTitle}>Or checkout out one of my live WIP projects <a style={{color:"white"}} rel="noopener noreferrer" target="_blank" href="https://event-hub-site.herokuapp.com/">here</a></h3>
    <p className={styles.indexTitle} >Warning: the project site is hosted on a free hosting, will be slow loading up.</p>
    <p className={styles.indexTitle} >should it not load the first time, please retry</p>
    <Background/>
    <Footer/>
</div>