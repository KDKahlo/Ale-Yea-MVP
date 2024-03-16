import React from "react";
import "../components/Home.css";




function Home() {
    return (
        <div className="container">
            {/* Logo section */}
            <div className="logo">
                <img src="images/AppLogo.png" alt="App Logo" />
            </div>

            {/* Orange box with sentence */}
            <div className="orange-box">
                <p>THE LONG WAIT IS OVER</p>
            </div>

            {/* Image section */}
            <div className="image-section">
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
            </div>

            {/* Line with arrow */}
            <div className="lineWithArrow"></div>

             {/* Separator line */}
             <div className="separator-line"></div>

            {/* Craftbeer Paragraph Section */}
            <div className="craft-beer-section">
                <p className="grayText">
                    Craft beer isn't just a beverage. It's a masterpiece in a pint glass!
                    Get ready to sip on the liquid artistry that is craft beer!
                    Before we start this ale-tastic journey, lets look at what makes this experience so unique.
                </p>
                <button className="ale-venture-button">Let the Ale-Venture Begin!</button>
            </div>
        </div>
    );
}

export default Home;
