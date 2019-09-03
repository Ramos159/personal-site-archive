import React from "react"
import Navbar from "./navbar.js"
import styles from "../styles/index.module.css"

export default class Layout extends React.Component {
    // constructor(props){
    //     super(props)
    // }
    render(){
        return<div className={styles.mainPage}>
            <Navbar></Navbar>
            <h1 className={styles.indexTitle}>Home Page</h1>
        </div>
    }
}