import React from "react"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import Works from "./pages/works"
import LinksPage from "./pages/works/linksPage"
import RealEstate from "./pages/works/realEstate"
import WebChat from "./pages/works/webChat"
import RealEstateBot from "./pages/works/realEstateBot"


function App(){
    return(
        <Router>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/works' element={<Works/>} />
                <Route path="/linksPage" element={<LinksPage/>}/>
                <Route path="/realEstate" element={<RealEstate/>}/>
                <Route path="/webChat" element={<WebChat/>}/>
                <Route path="/realEstateBot" element={<RealEstateBot/>}/>
            </Routes>
        </Router>
    )
}

export default App