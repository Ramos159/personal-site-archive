import React from "react"
import Footer from "../components/footer.js"
import Navbar from "../components/navbar.js"
import Background from "../components/background.js"
import styles from "../styles/index.module.css" 
import resume from "../media/resume.pdf"
import resumePDF from "../media/resume.pdf"



export default () =>
<div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <Navbar/>
    <a href={resumePDF} style={{textDecoration:"none"}} download="Edwin_Ramos_Resume">
        <button className={styles.btn}>
            <i className="fa fa-download"/>
             Download
        </button>
    </a>
    <iframe className={styles.resume}src={resume} type="application/pdf" width="825px" height="1050px"/>   
    <Background/>
    <Footer/>
</div>