import React from "react"
import Footer from "../components/footer.js"
import Navbar from "../components/navbar.js"
import styles from "../styles/index.module.css"
import defaultPic from "../media/defaultpic.gif"
import Background from "../components/background.js"



export default () =>
<div>
    <Navbar/>
    <h1 className={styles.indexTitle}>About</h1>
    <img className={styles.circleIcon}src={defaultPic} alt="icon"/>
    <p className={styles.aboutText}>I'm someone who likes to have fun, but also knows the value of work</p>
    <p className={styles.aboutText}>Often, you there are people who have too much fun... or work too hard...</p>
    <p className={styles.aboutText}>If I didn't work hard, you'd see a rather boring site (god, i hope this isnt boring)</p>
    <p className={styles.aboutText}>I can not guarantee I had fun figuring out the CSS, but i had fun doing other things</p>
    <p className={styles.aboutText}>A main principle in design tells that more is less. Oddly enough that works for code too</p>
    <br/>
    <br/>
    <p className={styles.aboutText}>I use my background as a former CS student, and a Flatiron School graduate to produce the good stuff</p>
    <p className={styles.aboutText}>My vast experience in retail allows me to work well with teams, encourage growth, and maintain chemistry</p>
    <p className={styles.aboutText}>With genuine passion for Technology, I'm constantly expanding my skillset to accomodate my work and interests</p>
    <p className={styles.aboutText}>Whenever I'm not coding, I love playing video games, exploring the city I call home and finding the perfect pizza slice</p>
    <Background/>
    <Footer/>
    <div className={styles.skillsDiv}>
        {/* <img></img> */}
    </div>
</div>