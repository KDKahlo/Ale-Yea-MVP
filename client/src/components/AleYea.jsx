import React,{useState} from "react";
import {Routes, Route, Link} from "react-router-dom";

export default function AleYea({ fetchFlavorRecommendations, setError, flavor }){

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
              {/* Navbar */}
        <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="\images\Ale-Yea-Updated-Logo.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
           
            <ul className="nav">
                <li className="nav-item">
                     <Link className="nav-link"  to="/">HOME</Link>
                </li>
                <li className="nav-item">
                     <Link className="nav-link" to="/AleVenture">ALE-VENTURE!</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/AleYea">ALE-YEA!</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link"to="/CraftbeerMe">CRAFTBEER ME!</Link>
                </li>
            </ul> 
           
          </a>
        </div>
      </nav> 
            <h1>Ale Yea!</h1>
            <div>
      <form onSubmit={handleSubmit}>
        <label>
          Select a flavor:
          <input type="text" value={flavor} onChange={(e) => setFlavor(e.target.value)} />
        </label>
        <button type="submit">Get Recommendations</button>
      </form>

      {error && <p>{error}</p>}

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
    )
}