import React from "react"
import styles from "../styles/index.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import {Link} from "gatsby"

export default class Navbar extends React.Component{
    
    render(){
    return<ul id={styles.navbar}>
            <li className={styles.navbarItem}><AniLink fade className={styles.navbarLink}to="/">Home</AniLink></li>
            <li className={styles.navbarItem}><a fade className={styles.navbarLink} target="_blank" rel="noopener noreferrer"href="https://medium.com/@edwinramos269">Blogs</a></li>
            <li className={styles.navbarItem}><AniLink fade className={styles.navbarLink}to="/projects">Projects</AniLink></li>
            <li className={styles.navbarItem}><AniLink fade className={styles.navbarLink}to="/resume">Resume</AniLink></li>
            <li className={styles.navbarItemRight}><a className={styles.navbarLink}href="mailto:edwinramos269@gmail.com?subject=Inquery%20about%20your%20awesomeness&body=Hey%20Edwin,%20I%20was%20wondering%20how%20you%20became%20so%20awesome...">Contact</a></li>
            <li className={styles.navbarItemRight}><AniLink fade className={styles.navbarLink}to="/about">About</AniLink></li>
          </ul>
    }
}