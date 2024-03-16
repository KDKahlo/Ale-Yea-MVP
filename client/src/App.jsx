import { useState } from 'react'
import Home from "./components/Home";
import "./App.css";
import { Routes, Route} from "react-router-dom"
// import Aleventure from "./components/AleVenture";
// import AleYea from "./components/AleYea";
// import CraftbeerMe from "./components/CraftbeerMe";
// import Page404 from "./components/Page404";




function App() {
  

  return (
    <>
    <div className="appHeader">
    <img className="appLogo" src="images/AppLogo.png" alt= "logo of app title with 2 beer mugs toasting"/>
   <h1 className="appTitle"> ALE YEA! CRAFTBEER ME!</h1>
   </div>
     <nav>

    <ul>
     
      {/* <li>
        <Link>AleYea</Link>
      </li>
      <li>
        <Link>CraftbeerMe</Link> 
      </li> */}
    </ul>

     </nav>
    <Routes>
    <Route path="/" element={<Home />} />
   
       </Routes>
      
    </>
  )
}

export default App
