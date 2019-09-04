import React from "react"
// import LayOut from "../components/layout.js"
import Footer from "../components/footer.js"
import Navbar from "../components/navbar.js"
import Background from "../components/background.js"
import styles from "../styles/index.module.css"
import githubIcon from "../media/github.png"
import linkedinIcon from "../media/linkedin.png"

export default () =>
<div>
    <Navbar/>
    <h1 className={styles.indexTitle}>Edwin J. Ramos</h1>
    <h2 className={styles.indexTitle}>Fullstack Software Engineer</h2>
    <h3 className={styles.indexTitle}>New York, NY</h3>
    <div className={styles.imageDiv}>
        <a href="https://github.com/Ramos159" target="_blank" rel="noopener noreferrer"><img className={styles.icon} align="middle" src={githubIcon} alt="GitHub Icon"></img></a>
        <a href="https://www.linkedin.com/in/edwin-ramos-46a98a18a/" target="_blank" rel="noopener noreferrer"><img className={styles.icon} align="middle" src={linkedinIcon} alt="Linkedin Icon"></img></a>
    </div>
    <Background/>
    <Footer/>
</div>
