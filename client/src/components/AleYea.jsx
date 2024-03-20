import React from "react";
import {Routes, Route, Link} from "react-router-dom";

export default function AleYea(){
    return (
        <div className="AleYea">
              {/* Navbar */}
        <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src="\images\Ale-Yea-Updated-Logo.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/>
           
            <ul class="nav">
                <li class="nav-item">
                     <Link class="nav-link"  to="/">HOME</Link>
                </li>
                <li class="nav-item">
                     <Link class="nav-link" to="/AleVenture">ALE-VENTURE!</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/AleYea">ALE-YEA!</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link"to="/CraftbeerMe">CRAFTBEER ME!</Link>
                </li>
            </ul> 
           
          </a>
        </div>
      </nav> 
            <h1>Ale Yea!</h1>
           <p>Adding filter for flavor and a filter for location</p>
        </div>
    )
}