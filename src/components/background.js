import React from "react"
import "../styles/index.css"
import video from "../media/video3.mp4"

export default class Background extends React.Component {
    render(){
        return<video autoPlay muted loop className="video">
                <source src={video} type="video/mp4"/>
              </video>
    }
}