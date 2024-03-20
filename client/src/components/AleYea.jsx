import React from "react";
import {Routes, Route, Link} from "react-router-dom";

export default function AleYea(){
    return (
        <div className="AleYea">
            <h1>Ale Yea!</h1>
            <p>
                <Link to="/">Home</Link>
            </p>
        </div>
    )
}