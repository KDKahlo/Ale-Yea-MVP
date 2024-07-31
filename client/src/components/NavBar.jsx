import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <a className="navbar__brand">
          <img src="\images\Ale-Yea-Updated-Logo.png" alt="Brand Logo" className="navbar__logo" />
        </a>
        
        <div className="navbar__menu">
          <ul className="navbar__list">
            <li className="navbar__item">
              <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? "navbar__link navbar__link--active" : "navbar__link"}
                end
              >
                Home
              </NavLink>
            </li>
            <li className="navbar__item">
              <NavLink 
                to="/AleVenture" 
                className={({ isActive }) => isActive ? "navbar__link navbar__link--active" : "navbar__link"}
              >
                AleVenture
              </NavLink>
            </li>
            <li className="navbar__item">
              <NavLink 
                to="/AleYea" 
                className={({ isActive }) => isActive ? "navbar__link navbar__link--active" : "navbar__link"}
              >
                Ale Yea
              </NavLink>
            </li>
            <li className="navbar__item">
              <NavLink 
                to="/CraftbeerMe" 
                className={({ isActive }) => isActive ? "navbar__link navbar__link--active" : "navbar__link"}
              >
                Craftbeer Me
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
