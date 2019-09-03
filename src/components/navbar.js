import React from 'react'
import styles from "../styles/index.module.css"

export default class Navbar extends React.Component{
    
    render(){
    return<ul id={styles.navbar}>
            <li className={styles.navbarItem}><a className={styles.navbarLink}href="../pages/index">Home</a></li>
            <li className={styles.navbarItem}><a className={styles.navbarLink}href="../pages/blogs">Blogs</a></li>
            <li className={styles.navbarItem}><a className={styles.navbarLink}href="../pages/blogs">Projects</a></li>
            <li className={styles.navbarItemRight}><a className={styles.navbarLink}href="../pages/contact">Contact</a></li>
            <li className={styles.navbarItemRight}><a className={styles.navbarLink}href="../pages/about">About</a></li>
          </ul>
    }
}