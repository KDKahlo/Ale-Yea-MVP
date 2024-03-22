import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import NavBar from "./NavBar";
import { FlavorProvider } from "./routes/FlavorContext";





export default function AleYea({ fetchFlavorRecommendations, setError }) {
  const { flavor, setFlavor } = useFlavor();



  const [recommendations, setRecommendations] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(`${flavor}`);
      const data = await fetchFlavorRecommendations(flavor);
      setRecommendations(data);
    } catch (error) {
      setError('No beers found with that flavor. Please try another flavor.');
    }
  };

  return (
    <div className="AleYea">
      <NavBar />
      <h1>Ale Yea!</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Select a flavor:
            <input type="text" value={flavor} onChange={(e) => setFlavor(e.target.value)} />
          </label>
          <button type="submit">Get Recommendations</button>
        </form>

        {/* {error && <p>{error}</p>} */}

        <div className="recommendations">
          {recommendations.map((beer) => (
            <div key={beer.id} className="beer">
              <h2>{beer.beername}</h2>
              <p>{beer.description}</p>
              <img src={beer.image_url} alt={beer.beername} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
