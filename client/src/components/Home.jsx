import React from "react";
import "./Home.css";
import HeroTeaser from "./HeroTeaser";
import Carousel from "./Carousel";
import { Routes, Route, Link } from "react-router-dom";

function Home() {
    return (
        <div className="background-container mt-0">
            <main>
              <HeroTeaser />
              <Carousel />
            </main>
        </div>
    );
}

export default Home;
