import { useEffect, useState } from "react"
import {useLocation} from "react-router-dom"
import { SearchAnimeModel } from "../Model/SearchAnimeModel"
import { getAnimeInfo } from "../Network/AnimeApi"
import {useNavigate} from "react-router-dom"
import { Card, Col, Container, Row } from "react-bootstrap"

const Results = () => {

    const location = useLocation()


    const navigate = useNavigate()

    const [results, setResults] = useState<SearchAnimeModel[]>([])

    useEffect(() => {
        
        setResults(location.state.search)
   
    }, [location.state.search] )
    

  return (
    <Container>
        
        
        <Row className="justify-content-center">
        
        {
        
        results.map((anime)=>{


           return(

            <Col key={anime.id} xs="auto">
            <Card text="white" bg="dark" style={{ width: '18rem' }}  onClick={async()=>{
                try {
                    

                    const animeData = await getAnimeInfo(anime.id);

                    navigate("/watch", {state: animeData.episodes})

                } catch (error) {
                    console.error(error)

                    alert(error)
                }
            }}>


             <Card.Img variant="top" src={anime.image}/>

             <Card.Body>

             <Card.Title>{anime.title}</Card.Title>

             </Card.Body>
         




            </Card>

            </Col>
           )
        })
       
        }
        
        
        </Row>
        
        </Container>
  )
}

export default Results