import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { getSearchResults } from "../Network/AnimeApi"
import { Button, Container, Nav, Navbar } from "react-bootstrap";




const NavbarBoot = () => {

  async function handleClick (inputValue: string)  {
    try {

     const searchResults = await getSearchResults(inputValue);
   

     navigate("/results", {state: {search: searchResults.results}})


     setInputValue("")

      
    } catch (error) {
      console.error(error)

      alert(error)
    }
  }


  const [inputValue, setInputValue] = useState("")
  const navigate = useNavigate()

  return (
    <Navbar  bg="dark" variant="dark"  expand="lg">

      <Container fluid>
        <Navbar.Brand onClick={()=>{navigate("/")}}  >HumAnime</Navbar.Brand>
        <Navbar.Toggle   aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            <Nav.Link  >Favorites</Nav.Link>
          </Nav>

        <input value={inputValue} onChange={(event)=>{setInputValue(event.target.value)}}  onKeyDown={async(event)=>{
                 
                 if(event.key === "Enter"){
                   await handleClick(inputValue)
                 }
           
               }} type="text" />

       <Button variant="secondary" onClick={
         async () => {
         await handleClick(inputValue)
        }

     
    } >Search</Button>
        </Navbar.Collapse>
      </Container>



</Navbar>
  )
}

export default NavbarBoot