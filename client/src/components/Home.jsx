import React from "react";
import "./Home.css";
import { Routes, Route, Link} from "react-router-dom"
import NavBar from "./NavBar";


function Home() {
    return (

     
        
        <div className="background-container">
          {/* <div className = "headerSection">
        <img   className = "headerSection z-0 position-absolute" src="\images\Ale-Yea-Background-right.png"/> 
          </div> */}
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
                     <Link className="nav-link text-body-tertiary" to="/AleVenture">ALE-VENTURE!</Link>
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
       


    <div className="carouselImages">
        <div id="carouselExampleCaptions" className="carousel slide position-absolute p-50 ">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner" >
          <div className="carousel-item active" data-bs-interval="100">
            <img src="images/photo-1615332579037-3c44b3660b53.avif" className="d-block  w-100"   alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>LET THE ALE-VENTURE BEGIN!</h5>
              <p> Craft beer isn't just a beverage. It's a masterpiece in a pint glass!
                Get ready to sip on the liquid artistry that is craft beer!
                Before we start this ale-tastic journey, lets look at what makes this experience so unique.</p>
                <Link to="/AleVenture">HOP ON OVER TO ALE-VENTURE!</Link>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="100">
            <img src="images/photo-1505075106905-fb052892c116.avif" className="d-block w-100"  alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>CRAFTBEER ME!</h5> 
              <p>Alright, time to pick your flavor adventure! Are you feeling sweet like caramel, 
                fruity like a tropical vacation, nutty like your quirky neighbor,
                 or perhaps creamy like a milkshake that brings all the folks to the yard? 
                Then dive into the flavorful world of craft beer with
                our custom quiz and find your the perfect match.</p>
                <Link to="/CraftbeerMe">HOP ON OVER TO CRAFTBEER ME!</Link>
            </div>
          </div>
          <div className="carousel-item">
            <img src="\images\photo-1584225064785-c62a8b43d148.avif" className="d-block  w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>ALE-YEA I KNOW MY BREW!</h5>
              <p>Craft Beer Connoisseurs, take the express lane to your brew haven! With a swift search,
                 dive into your favorite flavors or scout local sips nearby.
                 No more wild goose chases—just hoppy adventures await with a quick tap on ALE-YEA. 🍻</p>
                 <Link to="/AleYea">HOP ON OVER TO ALE-YEA!</Link>                 
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
       </div>
     
      </div>
     
      {/* <div class="container fixed-bottom">
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
</div>*/}
</div> 
     
    );
}

export default Home;
