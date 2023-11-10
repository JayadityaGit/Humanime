import { StreamModel } from "../Model/StreamArray"
import {MediaPlayer, MediaProvider} from "@vidstack/react"
import {defaultLayoutIcons, DefaultVideoLayout} from "@vidstack/react/player/layouts/default"
import { Container } from "react-bootstrap"


interface VideoPlayerProps{
  episodeSources: StreamModel[]
}

const VideoPlayer = ({episodeSources}: VideoPlayerProps) => {


  let source = episodeSources.filter(obj => obj.quality === "default")

 

  return (
    <Container>


{
  source.map((stream)=>{
    return(
        <MediaPlayer key={stream.url} title="enjoy" src={stream.url}>
          <MediaProvider />
          <DefaultVideoLayout icons={defaultLayoutIcons} />
        </MediaPlayer>
    )
  })
}
      
  




    </Container>
  )
}

export default VideoPlayer