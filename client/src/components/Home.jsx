import React from "react";
import { Link} from "react-router-dom";

export default function Home(){
    return (
        <div className="Home">
            <h1>Home</h1>
            <p>
                <Link to="/">Home</Link>
            </p>
        </div>
    )
}