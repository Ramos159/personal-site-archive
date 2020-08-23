import React from "react"
import Navbar from "./navbar.js"
import Footer from "./footer.js"
import "../styles/index.css"

export default class Layout extends React.Component {
  render() {
    return (
      <div className="mainPage">
        <Navbar />
        <Footer />
      </div>
    )
  }
}
