import React from "react"

export default class Footer extends React.Component {
    constructor(){
        super()
        this.date = new Date()
    }
    render(){
        return<div style={{paddingTop:"40px"}}><footer>© Edwin J. Ramos, {this.date.getFullYear()}</footer></div>
    }
}