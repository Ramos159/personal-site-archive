import React from "react"
import Footer from "../components/footer.js"
import Navbar from "../components/navbar.js"
import styles from "../styles/index.module.css"
import defaultPic from "../media/defaultpic.gif"
import Background from "../components/background.js"
import CSSPic from "../media/skills/css.png"
import HTMLPic from "../media/skills/html5.svg"
import JavaPic from "../media/skills/java.jpg"
import JSPic from "../media/skills/js.png"
import ReactPic from "../media/skills/react.png"
import RubyPic from "../media/skills/ruby.png"
import RORPic from "../media/skills/rubyonrails.png"
import SQLPic from "../media/skills/sql.png"
import WebdevPic from "../media/skills/webdev.png"

export default () =>
<div>
    <Navbar/>
    <h1 className={styles.indexTitle}>About</h1>
    <img className={styles.circleIcon}src={defaultPic} alt="icon"/>
    <p className={styles.aboutText}>I'm someone who likes to have fun, but also knows the value of work</p>
    <p className={styles.aboutText}>Often, you there are people who have too much fun... or work too hard...</p>
    <p className={styles.aboutText}>If I didn't work hard, you'd see a rather boring site (god, i hope this isnt boring)</p>
    <p className={styles.aboutText}>I can not guarantee I had fun figuring out the CSS, but i had fun doing other things</p>
    <p className={styles.aboutText}>A main principle in design tells that less is more. Oddly enough that works for code too</p>
    <br/>
    <br/>
    <p className={styles.aboutText}>I use my background as a former CS student, and a Flatiron School graduate to produce the good stuff</p>
    <p className={styles.aboutText}>My vast experience in retail allows me to work well with teams, encourage growth, and maintain chemistry</p>
    <p className={styles.aboutText}>With genuine passion for Technology, I'm constantly expanding my skillset to accomodate my work and interests</p>
    <p className={styles.aboutText}>Whenever I'm not coding, I love playing video games, exploring the city I call home and finding the perfect pizza slice</p>
    <Background/>
    <Footer/>
    <div className={styles.flexContainer}>
        <a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank" rel="noopener noreferrer" alt="Javascript Wiki"><img alt="Javascipt pic" className={styles.icon}src={JSPic}/></a>
        <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" alt="React Website"><img alt="React Pic"className={styles.icon}src={ReactPic}/></a>
        <a href="https://html.spec.whatwg.org/" target="_blank" rel="noopener noreferrer" alt="HTML5 org website"><img alt="HTML Pic"className={styles.icon}src={HTMLPic}/></a>
        <a href="https://www.oracle.com/java/" target="_blank" rel="noopener noreferrer" alt="Oracle Java website"><img alt="Java Pic"className={styles.icon}src={JavaPic}/></a>
        <a href="https://www.ruby-lang.org/en/" target="_blank" rel="noopener noreferrer" alt="Official Ruby website"><img alt="Ruby Pic"className={styles.icon}src={RubyPic}/></a>
        <a href="https://rubyonrails.org/" target="_blank" rel="noopener noreferrer" alt="Ruby on Rails website"><img alt="Ruby on Rails pic"className={styles.icon}src={RORPic}/></a>
        <a href="https://www.w3.org/Style/CSS/" target="_blank" rel="noopener noreferrer" alt="W3 CSS website"><img alt="CSS Pic"className={styles.icon}src={CSSPic}/></a>
        <a href="https://en.wikipedia.org/wiki/SQL" target="_blank" rel="noopener noreferrer" alt="SQL Wiki"><img alt="SQL Pic"className={styles.icon}src={SQLPic}/></a>
        <a href="https://en.wikipedia.org/wiki/Web_development" target="_blank" rel="noopener noreferrer" alt="Web Development Wiki"><img alt="Web Development pic"className={styles.icon}src={WebdevPic}/></a>
    </div>
</div>