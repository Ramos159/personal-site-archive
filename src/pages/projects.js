import React from "react"
import Footer from "../components/footer.js"
import Navbar from "../components/navbar.js"
import Background from "../components/background.js"
import { RepoCard } from 'react-github-cards/dist/medium'
import 'react-github-cards/dist/medium.css';
import "../styles/index.css"



export default () =>
<div style={{  position: "relative",
  minHeight: "100vh",
  zIndex:"-10"
  }}>
    <Navbar/>
    <h1 className='indexTitle'>Projects</h1>
    <h2 className='indexTitle'>This Website!</h2>
    <div id='project'>
      <RepoCard username='Ramos159' repo='personal-site'/>
    </div>
    <p className='indexTitle'>Not much to explain here, just this website. 100% handbuilt.</p>
    <p className='indexTitle'>Nice looking Animations and pages with plain HTML and CSS(hopefully)</p>
    <p className='indexTitle'>Built with Javascript and Gatsby.Js</p>
    <hr style={{color:'white',backgroundColor:'white',width:'40%'}}></hr>
    <h2 className='indexTitle'>PocketDex</h2>
    <div id='project'>
      <RepoCard username='Ramos159' repo='Pokemon-react-native-app'/>
    </div>
    <p className='indexTitle'>This is a work in-progress and my first forray into mobile development.</p>
    <p className='indexTitle'>Will emulate a Pokedex from the Pokemon Series. Great source on everything Pokeverse.</p>
    <p className='indexTitle'>Will be using the Pokemon API, various React Native Component Libraries, Redux</p>
    <p className='indexTitle'>Building with Typescript, React Native, and Expo.</p>
    <hr style={{color:'white',backgroundColor:'white',width:'40%'}}></hr>
    <a style={{color:"white",textDecoration:"underline"}} rel="noopener noreferrer" target="_blank" href="https://nycttp-frontend.herokuapp.com/"><h2 className='indexTitle'>StockFolio</h2></a>
    <div id='project'>
      <RepoCard username='Ramos159' repo='reactdex-backend'/>
      <RepoCard username='dankoMong' repo='reactdex-frontend'/>
    </div>
    <p className='indexTitle'>Web App Project made for NYC Tech Talent Pipeline Assesment</p>
    <p className='indexTitle'>Real time stock data with Alphavantage API, encrypted login with BCrypt, Semantic UI components.</p>
    <p className='indexTitle'>Built with Javascript, React.JS, Ruby, Ruby on Rails</p>
    <hr style={{color:'white',backgroundColor:'white',width:'40%'}}></hr>
    <a style={{color:"white",textDecoration:"underline"}} rel="noopener noreferrer" target="_blank" href="https://event-hub-site.herokuapp.com/"><h2 className='indexTitle'>EventHub</h2></a>
    <div id='project'>
      <RepoCard username='Ramos159' repo='eventhub-frontend'/>
      <RepoCard username='Ramos159' repo='eventhub-backend'/>
    </div>
    <p className='indexTitle'>Web App that emulates an ecommerce site based on selling tickets to events</p>
    <p className='indexTitle'>Uses 2 TicketMaster API's, BCrypt, Postgres, Semantic UI</p>
    <p className='indexTitle'>Built with Javascript, React.JS, Ruby, Ruby on Rails</p>
    <hr style={{color:'white',backgroundColor:'white',width:'40%'}}></hr>
    <a style={{color:"white",textDecoration:"underline"}} rel="noopener noreferrer" target="_blank" href="https://www.youtube.com/watch?v=3cc1s6kSAmM"><h2 className='indexTitle'>ReactDex</h2></a>
    <div id='project'>
      <RepoCard username='Ramos159' repo='reactdex-backend'/>
      <RepoCard username='dankoMong' repo='reactdex-frontend'/>
    </div>
    <p className='indexTitle'>Pokemon Themed Web App that revolves around building teams</p>
    <p className='indexTitle'>Uses Official Pokemon API, BCrypt, MySql</p>
    <p className='indexTitle'>Built with Javascript, React.JS, Ruby, Ruby on Rails</p>
    <hr style={{color:'white',backgroundColor:'white',width:'40%'}}></hr>
    <h2 className='indexTitle'>Geometric Warfare</h2>
    <div id='project'>
      <RepoCard username='Ramos159' repo='geometric-warfare'/>
    </div>
    <p className='indexTitle'>Browser game app inspired by Geometry wars</p>
    <p className='indexTitle'>Classic spaceship shooter game with scaling difficulty and humorous game assets</p>
    <p className='indexTitle' style={{marginBottom:'50px'}}>Built with Javascript, Phaser3.JS Game Library, Ruby, Ruby on Rails</p>
    <Background/>
    <Footer/>
</div>