import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AleYea({ fetchFlavorRecommendations, setError, flavor, error }) {
  const [recommendations, setRecommendations] = useState([]);
  const [inputValue, setInputValue] = useState(''); // Renamed flavor state variable to inputValue


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetchFlavorRecommendations(inputValue);
        console.log(response.data);
      setRecommendations(response.data);
    
    } catch (error) {
      setError('No beers found with that flavor. Please try another flavor.');
      console.error(error);
    }
  };
  

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     console.log(`${inputValue}`);
  //     const data = await fetchFlavorRecommendations(inputValue);
  //     setRecommendations(data);
  //     console.log('This is my data:' `${data}`)
  //   } catch (error) {
  //     setError('No beers found with that flavor. Please try another flavor.');
  //   }
  // };

  return (
    <div className="AleYea">
      {/* Navbar */}
      <div className="navBar ">
        <div className = " bg-warning-subtle text-warning-emphasis position-absolute row col-sm-12">
        <nav className="navbar bg-body-tertiary p-3 mb-2 bg-warning-subtle text-warning-emphasis fixed-top">
        <div className="container-fluid p-3 mb-2 bg-warning-subtle text-warning-emphasis">
          <div className="appLogoImg" >
            <img src="\images\Ale-Yea-Updated-Logo.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
           </div>
            <ul className="nav p-3 mb-2 bg-warning-subtle text-warning-emphasis">
                <li className="">
                     <Link className="nav-link text-body-tertiary"  to="/">HOME</Link>
                </li>
                <li className="nav-item">
                     <Link className="nav-link text-body-tertiary" to="/AleVenture">ALE-VENTURE!</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-body-tertiary" to="/AleYea">ALE-YEA!</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-body-tertiary"to="/CraftbeerMe">CRAFTBEER ME!</Link>
                </li>
            </ul>
        </div>
      </nav> 
       </div>
        </div>
      <h1>Ale Yea!</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Select a flavor:
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
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
  );
}
