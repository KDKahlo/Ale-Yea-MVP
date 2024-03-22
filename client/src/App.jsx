
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CraftbeerMe from "./components/CraftbeerMe";
import AleVenture from "./components/AleVenture";
import AleYea from "./components/AleYea";
import Page404 from "./components/Page404";
import { FlavorProvider } from "./FlavorContext";

function App() {
  const [recommendations, setRecommendations] = useState([]);
  const [error, setError] = useState('');
  const [flavor, setFlavor] = useState(''); // Define flavor state

  // for filter by flavor in AleYea.jsx
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

  useEffect(() => {
    // Fetch recommendations when the component mounts
    fetchRecommendations();
  }, []);

  // for customized recommendations in CraftbeerMe.jsx
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
      // Handle error
    }
  };

  return (
    <FlavorProvider> {/* Wrap your entire application with FlavorProvider */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CraftbeerMe" element={<CraftbeerMe />} />
        <Route
          path="/AleYea"
          element={<AleYea flavor={flavor} />} // Pass flavor as a prop to AleYea
        />
        <Route path="/AleVenture" element={<AleVenture />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </FlavorProvider>
  );
}

export default App;


