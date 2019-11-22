import React from "react"
import "../styles/index.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import menuIcon from "../media/white-menu.png"
// import {Link} from "gatsby"

export default class Navbar extends React.Component{

  //  myFunction(){
  //   let x = document.getElementById(`${styles.navbar}`);
  //   if (x.className === `${styles.navbar}`) {
  //     x.className += `${styles.responsive}`;
  //   } else {
  //     x.className = `${styles.navbar}`;
  //   }
  // }
  state = {
    toggle:false
  }

  showMenu = () => {
    let menu = document.getElementById('holder')

    if (menu.className === "navbar") {
      menu.className += " responsive";
    } 
    else {
      menu.className = "navbar";
    }
  }

  // responsiveMenu = () =>{
  //   return(
  //     <div>
  //     <li className={styles.responsiveItem}><AniLink fade className={styles.navbarLink}to="/">Home</AniLink></li>
  //     <li className={styles.responsiveItem}><a fade className={styles.navbarLink} target="_blank" rel="noopener noreferrer"href="https://medium.com/@edwinramos269">Blogs</a></li>
  //     <li className={styles.responsiveItem}><AniLink fade className={styles.navbarLink}to="/projects">Projects</AniLink></li>
  //     <li className={styles.responsiveItem}><AniLink fade className={styles.navbarLink}to="/resume">Resume</AniLink></li>
  //     <li className={styles.responsiveItem}><a className={styles.navbarLink}href="mailto:edwinramos269@gmail.com?subject=Inquiry%20about%20your%20awesomeness&body=Hey%20Edwin,%20I%20was%20wondering%20how%20you%20became%20so%20awesome...">Contact</a></li>
  //     <li className={styles.responsiveItem}><AniLink fade className={styles.navbarLink}to="/about">About</AniLink></li>
  //     </div>
  //   )
  // }

  // <a href={null} className="hiddenIcon" onClick={this.showMenu}><img id="burger"src={menuIcon}/></a>
    
    render(){
    return<div id='holder'className="navbar">
            <AniLink fade to="/">Home</AniLink>
            <a fade  target="_blank" rel="noopener noreferrer"href="https://medium.com/@edwinramos269">Blogs</a>
            <AniLink fade to="/projects">Projects</AniLink>
            <AniLink fade to="/resume">Resume</AniLink>
            <a href="mailto:edwinramos269@gmail.com?subject=Inquiry%20about%20your%20awesomeness&body=Hey%20Edwin,%20I%20was%20wondering%20how%20you%20became%20so%20awesome...">Contact</a>
            <AniLink fade to="/about">About</AniLink>
            <a href={null} className="hiddenIcon" onClick={this.showMenu}><img id="burger"src={menuIcon}/></a>
          </div>
    }
}




