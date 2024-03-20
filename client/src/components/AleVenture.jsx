import React from "react";
import { Route, Routes, Link} from "react-router-dom";

export default function AleVenture(){
    return (
        <div className="AleVenture">
            <h1>Ale-Venture</h1>
            <p>
                <Link to="/">Home</Link>
            </p>
        </div>
    )
}