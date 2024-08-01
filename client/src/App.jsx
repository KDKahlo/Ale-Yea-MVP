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
      const response = await fetch(`/api/craftbeers/${flavor}`);
      console.log('this is my fetch response for fetchFlavorRecommendations:', response);

      const craftbeerData = await response.json();
      console.log(craftbeerData)
      
      return  craftbeerData;

    } catch (error) {
   
      throw new Error('Failed to fetch beer recommendations. Please try again.');
    }
  };



  
  //code for custom quiz with 3 questions for the user.
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
     
    } catch (error) {
     
    }
  };
  




  
  useEffect(() => {
    // Fetch recommendations when the component mounts
    // fetchRecommendations();
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
