import React from "react"
import Footer from "../components/footer.js"
import Navbar from "../components/navbar.js"
import "../styles/index.css"
import defaultPic from "../media/avatar.png"
import Background from "../components/background.js"
import CSSPic from "../media/skills/css.png"
import HTMLPic from "../media/skills/html5.svg"
import JavaPic from "../media/skills/java.jpg"
import JSPic from "../media/skills/js.png"
import ReactPic from "../media/skills/react.png"
import RubyPic from "../media/skills/ruby.png"
import RORPic from "../media/skills/rubyonrails.png"
import PYPic from "../media/skills/python.ico"
import WebdevPic from "../media/skills/webdev.png"

export default () =>
<div style={{  position: "relative",
  minHeight: "100vh"}}>
    <Navbar/>
    <h1 className='indexTitle'>About</h1>
    <img className='circleIcon'src={defaultPic} alt="icon"/>
    <p className='aboutText'>I like to have fun with things, but also know the value of hard work</p>
    <p className='aboutText'>Often, you find people who either have too much fun or work too hard</p>
    <p className='aboutText'>If I didn't work hard, you'd see a rather boring site to represent me to you </p>
    <p className='aboutText'>If I didn't have fun, You wouldn't see this well kept mustache on a default photo  </p>
    {/* <p className={styles.aboutText}>This gif photo is probably better than anything i had in my phone while making this</p> */}
    <p className='aboutText'>My design was part inspired of sheer annoyance with people over designing their sites </p>
    <p className='aboutText'>A main principle in design tells that less is really more. Oddly enough that works for code too</p>
    <br/>
    <br/>
    <p className='aboutText'>I use my experience as a former CS student, and a Flatiron School graduate to make great product</p>
    <p className='aboutText'>My vast experience in retail allows me to work well with teams, encourage growth, and maintain chemistry</p>
    <p className='aboutText'>With genuine passion for Technology, I'm constantly expanding my skillset to accomodate my work and interests</p>
    <p className='aboutText'>Whenever I'm not coding, I love playing video games, exploring the city I call home and finding the perfect pizza slice</p>
    <Background/>
    <div className='flexContainer'>
        <a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank" rel="noopener noreferrer" alt="Javascript Wiki"><img alt="Javascipt pic" className='icon'src={JSPic}/></a>
        <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" alt="React Website"><img alt="React Pic"className='icon'src={ReactPic}/></a>
        <a href="https://html.spec.whatwg.org/" target="_blank" rel="noopener noreferrer" alt="HTML5 org website"><img alt="HTML Pic"className='icon'src={HTMLPic}/></a>
        <a href="https://www.oracle.com/java/" target="_blank" rel="noopener noreferrer" alt="Oracle Java website"><img alt="Java Pic"className='icon'src={JavaPic}/></a>
        <a href="https://www.ruby-lang.org/en/" target="_blank" rel="noopener noreferrer" alt="Official Ruby website"><img alt="Ruby Pic"className='icon'src={RubyPic}/></a>
        <a href="https://rubyonrails.org/" target="_blank" rel="noopener noreferrer" alt="Ruby on Rails website"><img alt="Ruby on Rails pic"className='icon'src={RORPic}/></a>
        <a href="https://www.w3.org/Style/CSS/" target="_blank" rel="noopener noreferrer" alt="W3 CSS website"><img alt="CSS Pic"className='icon'src={CSSPic}/></a>
        <a href="https://python.org" target="_blank" rel="noopener noreferrer" alt="Python Wiki"><img alt="Pyhton Pic"className='icon'src={PYPic}/></a>
        <a href="https://en.wikipedia.org/wiki/Web_development" target="_blank" rel="noopener noreferrer" alt="Web Development Wiki"><img alt="Web Development pic"className='icon'src={WebdevPic}/></a>
    </div>
    <Footer/>
</div>