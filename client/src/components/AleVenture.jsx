import React from "react";
import { Route, Routes, Link} from "react-router-dom";
import "./AleVenture.css";


export default function AleVenture(){
    return (
        <>
        <div className="AleVenture">
              {/* Navbar */}
              <div className="navBar ">
        <div className = " bg-warning-subtle text-warning-emphasis position-absolute row col-sm-12">
        <nav className="navbar bg-body-tertiary p-3 mb-2 bg-warning-subtle text-warning-emphasis fixed-top">
        <div className="container-fluid p-3 mb-2 bg-warning-subtle text-warning-emphasis">
          <div className="appLogoImg" >
            <img src="\images\Ale-Yea-Updated-Logo.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
           </div>
            <ul className="nav p-3 mb-2 bg-warning-subtle text-warning-emphasis">
                <li className="">
                     <Link className="nav-link text-body-tertiary"  to="/">HOME</Link>
                </li>
                <li className="nav-item">
                     <Link className="nav-link text-body-tertiary " to="/AleVenture">ALE-VENTURE!</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-body-tertiary" to="/AleYea">ALE-YEA!</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-body-tertiary"to="/CraftbeerMe">CRAFTBEER ME!</Link>
                </li>
            </ul>
        </div>
      </nav> 
       </div>
        </div>

           
           
        </div>


        <div class="container fixed-bottom">
     <div className="row">
     <div className="col-md-6">
       <div className="card" style={{ width: "18rem" }}>
         <img
           src="images/photo-1623937228271-992646fb0fba.avif"
           className="card-img-top"
           alt="..."
         />
         <div className="card-body">
           <h5 className="card-title">Our Favorite Bars For Craft Beer in Berlin</h5>
           <h6 className="card-subtitle mb-2 text-body-secondary">Mar 16, 2024</h6>
           <p className="card-text">Whether you live in Berlin or are visiting, here are some spots that will not disappoint!</p>
           <a href="https://www.barcelonafoodexperience.com/blog/best-craft-beer-barcelona" className="card-link">Read more</a>
         
         </div>
       </div>
     </div>
     </div>

     <div className="row">
     <div className="col-md-6" >
       <div className="card" style={{ width: "18rem" }}>
         <img
           src="images/photo-1584225064785-c62a8b43d148.avif"
           className="card-img-top"
           alt="..."
         />
         <div className="card-body">
           <h5 className="card-title">Best Craft Beer in Barcelona - 40 Bars and Taprooms!</h5>
           <h6 className="card-subtitle mb-2 text-body-secondary">Mar 16, 2024</h6>
           <p className="card-text">Whether you live in Berlin or are visiting, here are some spots that will not disappoint!</p>
           <a href="https://www.barcelonafoodexperience.com/blog/best-craft-beer-barcelona" className="card-link">Read more</a>
         </div>
       </div>
     </div>
     </div>
    </div>
    </>
    ) 
   
} 