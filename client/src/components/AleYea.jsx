import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AleYea.css";

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
                     <Link className="nav-link text-body-tertiary " to="/AleVenture">ALE-VENTURE!</Link>
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
<div className=  "container-flavor-choice-and-title">
      <div className = "header">
      <h1 className="archivo-black-regular">Ale Yea!</h1>
      </div>

  <div className = "flavor-form">
     <form onSubmit={handleSubmit}>
  

    <div className = "" id = "label-input-button">
          <label htmlFor="exampleDataList" className="form-label protest-strike-regular">ALE YEA, I know which flavor I want! </label>
        <div className = "" id = "input-group"> 
             <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type a flavor..." type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
             <button className="btn mb-3 protest-strike-regular" type="submit">Tap 🍺 to Submit</button>
    </div>

        </div>
          <datalist id="datalistOptions">
              <option value="chocolate"/>
              <option value="fruity"/>
              <option value="sour"/>
              <option value="caramel"/>
              <option value="tropical"/>
          </datalist>
       
          <div ClassName = "col-auto">
         
         </div>
     </form>
         {error && <p>{error}</p>}
  </div>
</div>

 <div className= "container">  
  <main className = "grid">
          {recommendations.map((beer) => (
    <article>
     <div key={beer.id} >
       
       <img src={beer.image_url}
      alt="image of beer recommendation"/>

        <div className="text">
           <h3>{beer.beername}</h3>
           <p>{beer.description}</p>
         
        </div>
          
       
     </div> 
     </article>
      ))}
     
      </main>
 </div>
   
       
      </div>
  
  );
}
