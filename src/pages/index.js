import React from "react"
import LayOut from "../components/layout"
import styles from "../styles/index.module.css"
import video from "../styles/video.mp4"

export default () =>
<div>  
    <LayOut>
    </LayOut>
    <video autoPlay muted loop className={styles.video}>
        <source src={video} type="video/mp4"/>
    </video>
</div>
