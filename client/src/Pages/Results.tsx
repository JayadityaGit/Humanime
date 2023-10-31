import { useEffect, useState } from "react"
import {useLocation} from "react-router-dom"
import { SearchAnimeModel } from "../Model/SearchAnimeModel"
import { getAnimeInfo } from "../Network/AnimeApi"
import {useNavigate} from "react-router-dom"

const Results = () => {

    const location = useLocation()


    const navigate = useNavigate()

    const [results, setResults] = useState<SearchAnimeModel[]>([])

    useEffect(() => {
        
        setResults(location.state.search)
   
    }, [location.state.search] )
    

  return (
    <div>{
        
        results.map((anime)=>{
           return(
            <button key={anime.id} onClick={async()=>{
                try {
                    

                    const animeData = await getAnimeInfo(anime.id);

                    navigate("/watch", {state: animeData.episodes})

                } catch (error) {
                    console.error(error)

                    alert(error)
                }
            }}>{anime.title}</button>
           )
        })
        
        }</div>
  )
}

export default Results