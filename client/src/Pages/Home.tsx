import { useState } from "react"
import { getSearchResults } from "../Network/AnimeApi"
import {useNavigate} from "react-router-dom"




const Home = () => {

  const [inputValue, setInputValue] = useState("")

 

  const navigate = useNavigate()


  return (
    <div>

         <input onChange={(event)=>{setInputValue(event.target.value)}} type="text" />

         <button onClick={
          async () => {
            try {

             const searchResults = await getSearchResults(inputValue);
           

             navigate("/results", {state: {search: searchResults.results}})
              
            } catch (error) {
              console.error(error)

              alert(error)
            }
          }
         }>Search</button>

    </div>
  )
}

export default Home