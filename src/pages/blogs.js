import React from "react"
import Footer from "../components/footer.js"
import Navbar from "../components/navbar.js"
import Background from "../components/background.js"
import "../styles/index.css"



export default () =>
<div style={{  position: "relative",
  minHeight: "100vh",
  zIndex:"-10"
  }}>
    <Navbar/>
    <h1 className='indexTitle'>Blogs</h1>
    <h2 className='indexTitle'>Coming Soon!</h2>
    <h3 className='indexTitle'>For now see my blogs on Medium <a style={{color:"white"}} href="https://medium.com/@edwinramos269">here</a></h3>
    <Background/>
    <Footer/>
</div>