import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import "./components/App.css";
import { Routes, Route } from "react-router-dom";
import CraftbeerMe from "./components/CraftbeerMe";
import AleVenture from "./components/AleVenture";
import AleYea from "./components/AleYea";
import Page404 from "./components/Page404";
import NavBar from "./components/NavBar"; // Importiere die Navbar-Komponente

export default function App() {
  const [flavor, setFlavor] = useState('');
  const [recommendations, setRecommendations] = useState([]);
  const [error, setError] = useState('');

  const fetchFlavorRecommendations = async (flavor) => {
    try {
      const response = await fetch(`/api/craftbeers/${flavor}`);
      console.log('this is my fetch response for fetchFlavorRecommendations:', response);

      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      throw new Error('Failed to fetch beer recommendations. Please try again.');
    }
  };

  const fetchRecommendations = async () => {
    try {
      const response = await fetch('/craftbeers/recommendation');
      if (!response.ok) {
        throw new Error('Failed to fetch recommendations');
      }
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Response is not in JSON format');
      }
      const data = await response.json();
      // Set recommendations state if needed
    } catch (error) {
      // Handle error
    }
  };

  useEffect(() => {
    // Fetch recommendations when the component mounts
    // fetchRecommendations();
  }, []);

  return (
    <>
      <NavBar /> {/* Navbar global platzieren */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CraftbeerMe" element={<CraftbeerMe recommendations={recommendations} />} />
        <Route path="/AleYea" element={<AleYea fetchFlavorRecommendations={fetchFlavorRecommendations} setError={setError} flavor={flavor} error={error} />} />
        <Route path="/AleVenture" element={<AleVenture />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}
