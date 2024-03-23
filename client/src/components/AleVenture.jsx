import React from "react";
import { Route, Routes, Link} from "react-router-dom";


export default function AleVenture(){
    return (
        <div className="AleVenture">
              {/* Navbar */}
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
            <h1>Ale-Venture</h1>
            <p>
                <div class="container fixed-bottom">
  <div class="row">
    <div class="card"  style={{ width: '18rem' }}>
      <img src="images/photo-1584225064785-c62a8b43d148.avif" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Best Craft Beer in Barcelona - 40 Bars and Taprooms!</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">Feb 21, 2024</h6>
        <p class="card-text">Barcelona is busting at the seams with places to wet your palette with some craft beers 40 to be exact!</p>
        <a href="https://www.barcelonafoodexperience.com/blog/best-craft-beer-barcelona" class="card-link">Read more</a>
      </div>
    </div>
  
    <div class="card"  style={{ width: '18rem' }}>
      <img src="images/photo-1623937228271-992646fb0fba.avif" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Our Favorite Bars For Craft Beer in Berlin</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">Mar 16, 2024</h6>
        <p class="card-text">Whether you live in Berlin or are visiting, here are some spots that will not disappoint!</p>
        <a href="https://www.barcelonafoodexperience.com/blog/best-craft-beer-barcelona" class="card-link">Read more</a>
      </div>
    </div>
  </div>
</div>
            </p>
        </div>
    )
}