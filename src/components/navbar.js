import React from "react"
import "../styles/index.css"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class CustomNav extends React.Component{

  //  myFunction(){
  //   let x = document.getElementById(`${styles.navbar}`);
  //   if (x.className === `${styles.navbar}`) {
  //     x.className += `${styles.responsive}`;
  //   } else {
  //     x.className = `${styles.navbar}`;
  //   }
  // }
  // state = {
  //   toggle:false
  // }

  // showMenu = () => {
  //   let menu = document.getElementById('holder')

  //   if (menu.className === "navbar") {
  //     menu.className += " responsive";
  //   } 
  //   else {
  //     menu.className = "navbar";
  //   }
  // }

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
  //   return<Navbar bg="light" expand="lg">
  //     <Nav className="mr-auto">
  //       <Nav.Link href="#home">Home</Nav.Link>
  //       <Nav.Link href="#link">Link</Nav.Link>
  //     </Nav>
  // </Navbar>
  return<Navbar bg="black" expand="lg" variant="dark">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="https://www.edwinjramos.com/">Home</Nav.Link>
      <Nav.Link href="https://medium.com/@edwinramos269">Blogs</Nav.Link>
      <Nav.Link href="https://www.edwinjramos.com/projects">Projects</Nav.Link>
      <Nav.Link href="https://www.edwinjramos.com/resume">Resume</Nav.Link>
      <Nav.Link href="mailto:edwinramos269@gmail.com?subject=Inquiry%20about%20your%20awesomeness&body=Hey%20Edwin,%20I%20was%20wondering%20how%20you%20became%20so%20awesome...">Contact</Nav.Link>
      <Nav.Link href="https://www.edwinjramos.com/about">About</Nav.Link>
      {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
  </Navbar.Collapse>
</Navbar>
    }
}




