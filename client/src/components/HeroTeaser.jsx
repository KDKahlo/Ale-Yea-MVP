import React from "react";
import "./HeroTeaser.css";

export default function HeroTeaser() {
    return (
        <section className="hero__teaser">
            <div className="hero__content protest-strike-regular">
                <h2>Discover Your Perfect Craft Beer</h2>
                <h3>With ALEYEA CRAFTBEER ME! - Your Guide to the Craft Beer World</h3>
                <p>Whether you're a novice or a beer enthusiast, our app helps you discover new beers, learn more about craft brewing, and refine your taste preferences. Simple, intuitive, and tailored for your beer exploration journey.</p>
                <button>Explore Now</button>
            </div>
            <div className="hero__image">
                <img src="../images/photo-1536638317175-32449deccfc0.avif" alt="Hero" />
            </div>
        </section>
    )
}