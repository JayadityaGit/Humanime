
import { useEffect, useState } from "react"
import TopAnime from "../Components/TopAnime"
import { topAnimeModel } from "../Model/TopAnimeModel"
import { getTopAnime } from "../Network/AnimeApi"





const Home = () => {

  const [top, setTop] = useState<topAnimeModel[]>([])


  useEffect(() => {
    async function loadTopAnime() {

        try {
          

          const anime = await getTopAnime();

          setTop(anime.results)

         

        } catch (error) {
          console.error(error);

          alert(error)
        }
      
    }

    loadTopAnime()
  }, [])
  

  return (
    <div>
      <TopAnime anime = {top}/>
    </div>
  )
}

export default Home