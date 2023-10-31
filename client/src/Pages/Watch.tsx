import {useLocation} from "react-router-dom"

import {useEffect, useState} from "react"
import { episodesArrayModel } from "../Model/EpisodeArray";
import EpisodeButtons from "../Components/EpisodeButtons";
import VideoPlayer from "../Components/VideoPlayer";
import { StreamModel } from "../Model/StreamArray";

const Watch = () => {

    const location = useLocation();



    const [episodes, setEpisodes] = useState<episodesArrayModel[]>([])


    const [streams, setStreams] = useState<StreamModel[]>([])

    useEffect(() => {
    
        setEpisodes(location.state)
    
      
    }, [location.state])
    

  return (
    <div>

        <VideoPlayer episodeSources={streams}/>

         <EpisodeButtons streamSetter={(stream)=>{setStreams(stream)}} episodes={episodes}/>

        

         

    </div>
  )
}

export default Watch