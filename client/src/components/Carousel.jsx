import React from "react";
import "./Carousel.css";

export default function Carousel() {
    return (
        <section className="carousel__container">
            <div className="carousel__background"></div>
            <div className="carousel__slides">
                <div className="carousel__images col-md-8 protest-strike-regular">
                    <div id="carouselExampleAutoplaying" className="carousel slide">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="100">
                                <img src="images/photo-1615332579037-3c44b3660b53.avif" className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>LET THE ALE-VENTURE BEGIN!</h5>
                                    <p>
                                        Craft beer isn't just a beverage. It's a masterpiece in a pint glass! Get ready to sip on the liquid artistry that is craft beer! Before we start this ale-tastic journey, lets look at what makes this
                                        experience so unique.
                                    </p>
                                    <a href="/AleVenture" className="text-white-50">HOP ON OVER TO ALE-VENTURE</a>
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="100">
                                <img src="images/photo-1505075106905-fb052892c116.avif" className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>CRAFTBEER ME!</h5>
                                    <p>
                                        Alright, time to pick your flavor adventure! Are you feeling sweet like caramel, fruity like a tropical vacation, nutty like your quirky neighbor, or perhaps creamy like a milkshake that brings all the
                                        folks to the yard? Then dive into the flavorful world of craft beer with our custom quiz and find your the perfect match.
                                    </p>
                                    <a href="/CraftbeerMe" className="text-white-50">HOP ON OVER TO CRAFTBEER ME</a>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="images/photo-1584225064785-c62a8b43d148.avif" className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>ALE-YEA I KNOW MY BREW!</h5>
                                    <p>
                                        Craft Beer Connoisseurs, take the express lane to your brew haven! With a swift search, dive into your favorite flavors or scout local sips nearby. No more wild goose chases—just hoppy adventures await
                                        with a quick tap on ALE-YEA. 🍻
                                    </p>
                                    <a href="/AleYea" className="text-white-50">HOP ON OVER TO ALE-YEA</a>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
