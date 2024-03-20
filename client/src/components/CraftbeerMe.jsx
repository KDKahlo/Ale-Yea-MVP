import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./CraftbeerMe.css";

export default function CraftbeerMe({ recommendation1, recommendation2, recommendation3 }) {

  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [answer3, setAnswer3] = useState('');
  const [recommendations, setRecommendations] = useState([]);

  const flavors1 = ['fruity', 'hoppy', 'spicy', 'pineapple', 'lychee', 'raspberry', 'apple', 'tart', 'tropical', 'mango', 'tangerines', 'bitter', 'passionfruit', 'citrus', 'orange', 'grapefruit', 'coconut', 'guava'];
  const flavors2 = ['chocolate', 'vanilla', 'cinnamon', 'caramel', 'cocoa', 'marshmallow', 'coffee', 'toffee', 'biscuits', 'honey', 'bread', 'sour', 'woody', 'nutty', 'lime', 'pumpkin', 'cloves', 'floral', 'malty'];
  const abvOptions = ['low', 'high'];

  const handleAnswer1Change = (e) => {
    setAnswer1(e.target.value);
  };

  const handleAnswer2Change = (e) => {
    setAnswer2(e.target.value);
  };

  const handleAnswer3Click = (abv) => {
    setAnswer3(abv);
  };
//added optional chaining. with the '?' within the function. (recommendation1?.beername)
//Reasoning:
// (It's especially useful when you're dealing with nested objects and want to access a property deep
// within the object structure without encountering errors if any intermediate property is undefined.)
  const beerRecommendations = [
    {
      name: recommendation1?.beername,
      description: recommendation1?.description,
      image_url: recommendation1?.image_url,
      breweryname: recommendation1?.breweryname,
      breweryurl: recommendation1?.breweryurl,
    },
    {
      name: recommendation2?.beername,
      description: recommendation2?.description,
      image_url: recommendation2?.image_url,
      breweryname: recommendation2?.breweryname,
      breweryurl: recommendation2?.breweryurl,
    },
    {
      name: recommendation3?.beername,
      description: recommendation3?.description,
      image_url: recommendation3?.image_url,
      breweryname: recommendation3?.breweryname,
      breweryurl: recommendation3?.breweryurl,
    }
  ];
  
  const submitQuiz = async () => {
    try {
      const response = await fetch('/craftbeers/recommendations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          answer1,
          answer2,
          answer3
        })
      });

      if (!response.ok) {
        throw new Error('Failed to fetch recommendations');
      }

      const data = await response.json();
      setRecommendations(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
   
  }, []); 

  return (
    <>
      <div className="CraftbeerMe">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/AleYea">Ale Yea!</Link>
            </li>
            <li>
              <Link to="/AleVenture">Ale-Venture</Link>
            </li>
            <li>
              <Link to="/CraftbeerMe">CraftbeerMe</Link>
            </li>
          </ul>
        </nav>
        <div className="container">
          <label>
            "Imagine this: Your taste buds have had a rollercoaster of a day, 
            encountering the sour tang of lemonade stand mishaps, navigating through a jungle of tropical fruits,
            and stumbling upon a treasure chest of juicy berries.
            Which of the flavors in the list below would satisfy your taste buds' craving for comfort and familiarity?"
          </label>
          <select value={answer1} onChange={handleAnswer1Change}>
            <option value="">Select your first flavor</option>
            {flavors1.map((flavor) => (
              <option key={flavor} value={flavor}>{flavor}</option>
            ))}
          </select>

          <label>
            "Close your eyes and imagine a cozy scene: you're wrapped in a warm blanket, 
            with a favorite book in one hand and a comforting drink in the other. 
            What flavor from the list below would make you feel most at home, like a familiar embrace or a cherished memory?"
          </label>
          <select value={answer2} onChange={handleAnswer2Change}>
            <option value="">Select your second flavor</option>
            {flavors2.map((flavor) => (
              <option key={flavor} value={flavor}>{flavor}</option>
            ))}
          </select>

          <label>
            "If you were at a party and had to choose between dancing on the table or being the table, which would you pick?
            Are you more of a 'lightweight limbo dancer' or a 'brew-proof bunker'?"
          </label>
          <button onClick={() => handleAnswer3Click('low')}>Lightweight limbo dancer</button>
          <button onClick={() => handleAnswer3Click('high')}>Party Table Fortress</button>

          <button onClick={submitQuiz}>Submit</button>

          {/* Recommendations */}
          {recommendations.length > 0 && (
            <div>
              <h2>Recommendations</h2>
              <ul>
                {recommendations.map((recommendation, index) => (
                  <li key={index}>
                    <h3>{recommendation.beername}</h3>
                    <p>{recommendation.description}</p>
                    <img src={recommendation.image_url} alt={recommendation.beername} />
                    <div className="hover-box">
                      <p>Brewery: {recommendation.breweryname}</p>
                      <a href={recommendation.breweryurl} target="_blank" rel="noopener noreferrer">Visit Brewery</a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
