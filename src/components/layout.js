import React from "react"
import Navbar from "./navbar.js"
import Footer from "./footer.js"
import styles from "../styles/index.module.css"

export default class Layout extends React.Component {
    render(){
        return<div className={styles.mainPage}>
            <Navbar/>
            <Footer/>
        </div>
    }
}