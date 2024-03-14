import { useState } from 'react'
import Home from "./components/Home";
import Aleventure from "./components/AleVenture";
import AleYea from "./components/AleYea";
import CraftbeerMe from "./components/CraftbeerMe";
import Page404 from "./components/Page404";

import './App.css'

function App() {
  

  return (
    <>
    <h1>Ale Yea! Craftbeer Me!</h1>
     <nav>

    <ul>
      <li>
        <Link>Aleventure</Link>
      </li>
      <li>
        <Link>AleYea</Link>
      </li>
      <li>
        <Link>CraftbeerMe</Link> 
      </li>
    </ul>

     </nav>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/aleventure" element={<Aleventure />}>
    <Route path="/aleventure/aleyea" element={<Aleventure />} />
    </Route>
    <Route path="*" element={<Page404 />} />
    



    </Routes>
    </>
  )
}

export default App
