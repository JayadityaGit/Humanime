import { StreamModel } from "../Model/StreamArray"
import {MediaPlayer, MediaProvider} from "@vidstack/react"
import {defaultLayoutIcons, DefaultVideoLayout} from "@vidstack/react/player/layouts/default"


interface VideoPlayerProps{
  episodeSources: StreamModel[]
}

const VideoPlayer = ({episodeSources}: VideoPlayerProps) => {


  let source = episodeSources.filter(obj => obj.quality === "default")

 

  return (
    <div>


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
      
  




    </div>
  )
}

export default VideoPlayer