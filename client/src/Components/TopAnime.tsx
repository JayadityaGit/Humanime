
import { Card, Col, Container, Row } from "react-bootstrap"
import { topAnimeModel } from "../Model/TopAnimeModel"
import { getAnimeInfo } from "../Network/AnimeApi"
import { useNavigate } from "react-router-dom"

interface topAnimeProps{
    anime: topAnimeModel[]
}

const TopAnime = ({anime}: topAnimeProps) => {

    const navigate = useNavigate();

    
  return (
    <Container >
        

        <Row className="justify-content-center">
        
        
        {
        
        anime.map((topAnime)=>{

            return(

            
                <Col key={topAnime.id} xs="auto" >
      
                <Card onClick={async()=>{

                    try {

                      const episodes =  await getAnimeInfo(topAnime.id);

                      navigate("/watch", {state: episodes.episodes})
                        
                    } catch (error) {
                        console.error(error)

                        alert(error)
                    }


                }} text="white" bg="dark"   style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={topAnime.image}/>

                    <Card.Body>
                        <Card.Title>{topAnime.title}</Card.Title>
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

export default TopAnime