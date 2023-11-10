import { Button, Col, Container, Row } from "react-bootstrap"
import { episodesArrayModel } from "../Model/EpisodeArray"
import { StreamModel } from "../Model/StreamArray"
import { getStreams } from "../Network/AnimeApi"
import { useState } from "react"
import styles from "../Styles/episode.module.css"


interface EpisodeButtonsProps{
    episodes: episodesArrayModel[],
    streamSetter: (streams: StreamModel[])=>void
}

const EpisodeButtons = ({episodes, streamSetter}: EpisodeButtonsProps) => {

    const [buttonClick, setButtonClick] = useState(false);

    const [buttonId, setButtonId] = useState("");
  return (
    <Container >

        <Row>
        {
            episodes.map((episode)=>{


                return(

                    <Col key={episode.id}>

                    <Button className={styles.episodeButton} variant={buttonClick === true && buttonId === episode.id ? "warning": "secondary"} onClick={async()=>{

                        try {

                            const streamData = await getStreams(episode.id)

                             streamSetter(streamData.sources)

                             setButtonId(episode.id)

                             setButtonClick(true);

                             
                            
                        } catch (error) {
                            console.error(error)
                            alert(error)
                        }

                    }} key={episode.id}>{episode.number}</Button>


            </Col>
                )
            })
        }
        </Row>
    </Container>
  )
}

export default EpisodeButtons