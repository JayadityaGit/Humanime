import {useLocation} from "react-router-dom"

import {useEffect, useState} from "react"
import { episodesArrayModel } from "../Model/EpisodeArray";
import EpisodeButtons from "../Components/EpisodeButtons";
import VideoPlayer from "../Components/VideoPlayer";
import { StreamModel } from "../Model/StreamArray";
import { Col, Container, Row } from "react-bootstrap";

import styles from "../Styles/watch.module.css"

const Watch = () => {

    const location = useLocation();



    const [episodes, setEpisodes] = useState<episodesArrayModel[]>([])


    const [streams, setStreams] = useState<StreamModel[]>([])

    useEffect(() => {
    
        setEpisodes(location.state)
    
      
    }, [location.state])
    

  return (
    <Container className={styles.watchContainer} >

       <Row className=" gap-4">

        <Col xs = "12" >
        <VideoPlayer episodeSources={streams}/>
        </Col>

        <Col xs = "12" >
         <EpisodeButtons streamSetter={(stream)=>{setStreams(stream)}} episodes={episodes}/>
         </Col>
         </Row>
        
         
         
    </Container>
  )
}

export default Watch