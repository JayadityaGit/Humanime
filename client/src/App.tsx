import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Pages/Home"
import Results from "./Pages/Results"
import Watch from "./Pages/Watch"

const App = () => {
  return (    
  
  <BrowserRouter>
    
    <Routes>


        <Route path="/" element={<Home/>}/>

        <Route path="/results" element={<Results/>}/>

        <Route path="/watch" element={<Watch/>}/>



    </Routes>

</BrowserRouter>
  )
}

export default App