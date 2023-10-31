import { episodesArrayModel } from "../Model/EpisodeArray"
import { StreamModel } from "../Model/StreamArray"
import { getStreams } from "../Network/AnimeApi"

interface EpisodeButtonsProps{
    episodes: episodesArrayModel[],
    streamSetter: (streams: StreamModel[])=>void
}

const EpisodeButtons = ({episodes, streamSetter}: EpisodeButtonsProps) => {
  return (
    <div>
        {
            episodes.map((episode)=>{
                return(
                    <button onClick={async()=>{

                        try {

                            const streamData = await getStreams(episode.id)

                             streamSetter(streamData.sources)
                            
                        } catch (error) {
                            console.error(error)
                            alert(error)
                        }

                    }} key={episode.id}>{episode.number}</button>
                )
            })
        }
    </div>
  )
}

export default EpisodeButtons