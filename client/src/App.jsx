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

  // const fetchFlavorRecommendations = async (flavor) => {
  //   try {
  //     const response = await Promise.race([
  //       fetch(`/api/craftbeers/${flavor}`), // Fetch request
  //       new Promise((_, reject) =>
  //         setTimeout(() => reject(new Error('Request timeout')), 20000) // Timeout after 5 seconds
  //       ),
  //     ]);
  //     console.log('this is my fetch response for fetchFlavorRecommendations:', response);
  //     if (!response.ok) {
  //       throw new Error('Failed to fetch beer recommendations');
  //     }
  //     const data = await response.json();
  //     return data;
  //   } catch (error) {
  //     console.error(error);
  //     throw new Error('Failed to fetch beer recommendations. Please try again.');
  //   }
  // };
  
  const fetchFlavorRecommendations = async (flavor) => {
    try {
      const response = await fetch(`/api/craftbeers/${flavor}`);
      console.log('this is my fetch response for fetchFlavorRecommendations:', response);

      if (!response.ok) {
        throw new Error('Failed to fetch beer recommendations');
      }
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Response is not in JSON format');
      }
      const data = await response.json();
      console.log(data)
      return data;
    } catch (error) {
      // console.error(error);
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
      setRecommendations(data);
    } catch (error) {
      // console.error(error);
      // Handle error, you can set error state here or display a notification to the user
    }
  };
  




  // const fetchFlavorRecommendations = async (flavor) => {
  //   // console.log(flavor);
  //   try {
  //     const response = await fetch(`/craftbeers/${flavor}`);
  //     if (!response.ok) {
  //       throw new Error('Failed to fetch beer recommendations');
  //     }
  //     const data = await response.json();
  //     return data;
  //   } catch (error) {
  //     console.error(error);
  //     throw new Error('No beers found with that flavor. Please try another flavor.');
  //   }
  // };

  // const fetchRecommendations = async () => {
  //   try {
  //     const response = await fetch('/craftbeers/recommendations');
  //     if (!response.ok) {
  //       throw new Error('Failed to fetch recommendations');
  //     }
  //     const data = await response.json();
  //     // Assuming the response is an array of recommendations
  //     setRecommendations(data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

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
