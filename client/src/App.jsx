import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import "./components/App.css";
import { Routes, Route, Link} from "react-router-dom"
import CraftbeerMe from "./components/CraftbeerMe";
import AleVenture from "./components/AleVenture";
import AleYea from "./components/AleYea";
import Page404 from "./components/Page404";




export default function App() {

  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    // Fetch recommendations when the component mounts
    fetchRecommendations();
  }, []);

  const fetchRecommendations = async () => {
    try {
      const response = await fetch('/craftbeers/recommendations');
      if (!response.ok) {
        throw new Error('Failed to fetch recommendations');
      }
      const data = await response.json();
      // Assuming the response is an array of recommendations
      setRecommendations(data);
    } catch (error) {
      console.error(error);
    }
  };




  return (
    <>
    

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CraftbeerMe" element={<CraftbeerMe recommendations={recommendations} />} />
        <Route path="/AleYea" element={<AleYea />} />
        <Route path="/AleVenture" element={<AleVenture />} />
        <Route path="*" element={<Page404 />} />
      </Routes>

    
    </>
  );
}


