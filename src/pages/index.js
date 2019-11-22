import React from "react"
// import LayOut from "../components/layout.js"
import Footer from "../components/footer.js"
import Navbar from "../components/navbar.js"
import Background from "../components/background.js"
import  "../styles/index.css"
import githubIcon from "../media/github.png"
import linkedinIcon from "../media/linkedin.png"

export default () =>
<div style={{  position: "relative",
  minHeight: "100vh"}}> 
    <Navbar/>
    <h1 className='indexTitle'>Edwin J. Ramos</h1>
    <h2 className='indexTitle'>Software Engineer</h2>
    <h3 className='indexTitle'>New York, NY</h3>
    <div className='imageDiv'>
        <a href="https://github.com/Ramos159" target="_blank" rel="noopener noreferrer"><img className='icon' align="middle" src={githubIcon} alt="GitHub Icon"></img></a>
        <a href="https://www.linkedin.com/in/edwin-j-ramos-46a98a18a/" target="_blank" rel="noopener noreferrer"><img className='icon' align="middle" src={linkedinIcon} alt="Linkedin Icon"></img></a>
    </div>
    <p id='warning'className='indexTitle'>I see you're on mobile, I apologize for the wacky menu above! I'm working on it haha</p>
    <Background/>
    <Footer/>
</div>
