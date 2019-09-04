import React from "react"
// import styles from "../styles/index.module.css"

export default class Footer extends React.Component {
    constructor(){
        super()
        this.date = new Date()
    }
    render(){
        return<footer>© Edwin J. Ramos, {this.date.getFullYear()}</footer>
    }
}