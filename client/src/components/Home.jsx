import React from "react";
import "./Home.css";
import { Routes, Route, Link} from "react-router-dom"



function Home() {
    return (
        
        
        <div className="background-container">

        {/* Navbar */}
        <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src="\images\Ale-Yea-Updated-Logo.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/>
           
            <ul class="nav">
                <li class="nav-item">
                     <Link class="nav-link"  to="/">HOME</Link>
                </li>
                <li class="nav-item">
                     <Link class="nav-link" to="/AleVenture">ALE-VENTURE!</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/AleYea">ALE-YEA!</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link"to="/CraftbeerMe">CRAFTBEER ME!</Link>
                </li>
            </ul> 
           
          </a>
        </div>
      </nav> 
        
       



        <div id="carouselExampleCaptions" class="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner" >
          <div className="carousel-item active" data-bs-interval="100">
            <img src="images/photo-1615332579037-3c44b3660b53.avif" class="d-block w-100"   alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>LET THE ALE-VENTURE BEGIN!</h5>
              <p> Craft beer isn't just a beverage. It's a masterpiece in a pint glass!
                Get ready to sip on the liquid artistry that is craft beer!
                Before we start this ale-tastic journey, lets look at what makes this experience so unique.</p>
                <Link to="/AleVenture">HOP ON OVER TO ALE-VENTURE!</Link>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="100">
            <img src="images/photo-1505075106905-fb052892c116.avif" class="d-block w-100"  alt="..."/>
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
            <img src="\images\photo-1584225064785-c62a8b43d148.avif" class="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>ALE-YEA I KNOW MY BREW!</h5>
              <p>Craft Beer Connoisseurs, take the express lane to your brew haven! With a swift search,
                 dive into your favorite flavors or scout local sips nearby.
                 No more wild goose chases—just hoppy adventures await with a quick tap on ALE-YEA. 🍻</p>
                 <Link to="/AleYea">HOP ON OVER TO ALE-YEA!</Link>                 
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
       
      </div>
      </div>
    );
}

export default Home;
{/* 
{/* // <div className="container">
//  Logo section 
// <div className="logo">
//     <img src="images/Ale-Yea-Updated-Logo.png" alt="App Logo" />
// </div> 
*/}
{/* <nav>
<ul>
<li>
  <Link to="/">Home</Link>
</li>
 <li>
  <Link to="/AleYea">Ale Yea!</Link>
</li>
<li>
  <Link to="/AleVenture">Ale-Venture</Link>
</li>
<li>
  <Link to="/CraftbeerMe">CraftbeerMe</Link>
</li>
</ul>
</nav> */}

{/* Orange box with sentence */}
{/* <div className="orange-box">
    <p>THE LONG WAIT IS OVER</p>
</div> */}

{/* Image section */}
{/* <div className="image-section">
    <div className="image-box">
        <img src="images/photo-1623937228271-992646fb0fba.avif" alt="beer pour" />
        <p className="image-text">FROM THE POUR</p>
        <div className="empty-box"></div>
    </div>
    <div className="image-box">
        <img src="images/photo-1584225064785-c62a8b43d148.avif" alt="beer samples" />
        <p className= "image-text">FROM THE TASTE</p>
        <div className="empty-box2"></div>
    </div>
</div> */}

{/* Line with arrow */}
{/* <div className="lineWithArrow"></div> */}

 {/* Separator line */}
{/* //  <div className="separator-line"></div> */}

{/* Craftbeer Paragraph Section */}
{/* <div className="craft-beer-section">
    <p className="grayText">
        Craft beer isn't just a beverage. It's a masterpiece in a pint glass!
        Get ready to sip on the liquid artistry that is craft beer!
        Before we start this ale-tastic journey, lets look at what makes this experience so unique.
    </p>
    <button className="ale-venture-button">Let the Ale-Venture Begin!</button>
</div>
</div> */}