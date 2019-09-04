import React from "react"
import styles from "../styles/index.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default class Navbar extends React.Component{
    
    render(){
    return<ul id={styles.navbar}>
            <li className={styles.navbarItem}><AniLink fade className={styles.navbarLink}to="/">Home</AniLink></li>
            <li className={styles.navbarItem}><AniLink fade className={styles.navbarLink}to="/blogs">Blogs</AniLink></li>
            <li className={styles.navbarItem}><AniLink fade className={styles.navbarLink}to="/projects">Projects</AniLink></li>
            <li className={styles.navbarItemRight}><AniLink fade className={styles.navbarLink}to="/contact">Contact</AniLink></li>
            <li className={styles.navbarItemRight}><AniLink fade className={styles.navbarLink}to="/about">About</AniLink></li>
          </ul>
    }
}