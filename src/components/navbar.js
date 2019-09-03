import React from "react"
import styles from "../styles/index.module.css"
import {Link} from "gatsby"

export default class Navbar extends React.Component{
    
    render(){
    return<ul id={styles.navbar}>
            <li className={styles.navbarItem}><Link className={styles.navbarLink}to="/">Home</Link></li>
            <li className={styles.navbarItem}><Link className={styles.navbarLink}to="/blogs">Blogs</Link></li>
            <li className={styles.navbarItem}><Link className={styles.navbarLink}to="/projects">Projects</Link></li>
            <li className={styles.navbarItemRight}><Link className={styles.navbarLink}to="/contact">Contact</Link></li>
            <li className={styles.navbarItemRight}><Link className={styles.navbarLink}to="/about">About</Link></li>
          </ul>
    }
}