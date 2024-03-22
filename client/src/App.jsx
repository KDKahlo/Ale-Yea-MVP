import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import "./components/App.css";
import { Routes, Route, Link } from "react-router-dom";
import CraftbeerMe from "./components/CraftbeerMe";
import AleVenture from "./components/AleVenture";
import AleYea from "./components/AleYea";
import Page404 from "./components/Page404";

export default function App() {
  const [flavor, setFlavor] = useState('');
  const [recommendations, setRecommendations] = useState([]);
  const [error, setError] = useState('');

  const fetchFlavorRecommendations = async (flavor) => {
    try {
      const response = await fetch(`/craftbeers/${flavor}`);
      if (!response.ok) {
        throw new Error('Failed to fetch beer recommendations');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw new Error('No beers found with that flavor. Please try another flavor.');
    }
  };

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

  useEffect(() => {
    // Fetch recommendations when the component mounts
    fetchRecommendations();
  }, []);

  return (
    <>
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
