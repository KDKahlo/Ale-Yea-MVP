import React from "react";
import { Routes, Route, Link} from "react-router-dom"


export default function NavBar(){

return (
    <>

 <nav className="navbar bg-body-tertiary">
 <div className="container-fluid">
   
     <img src="\images\Ale-Yea-Updated-Logo.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
    
     <ul className="nav">
         <li className="nav-item">
              <Link className="nav-link"  to="/">HOME</Link>
         </li>
         <li className="nav-item">
              <Link className="nav-link" to="/AleVenture">ALE-VENTURE!</Link>
         </li>
         <li className="nav-item">
             <Link className="nav-link" to="/AleYea">ALE-YEA!</Link>
         </li>
         <li className="nav-item">
             <Link className="nav-link"to="/CraftbeerMe">CRAFTBEER ME!</Link>
         </li>
     </ul> 
    
 
 </div>
</nav> 

 </>
)}


 