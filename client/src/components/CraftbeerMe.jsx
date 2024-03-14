import React from "react";
import { Link} from "react-router-dom";

export default function CraftbeerMe(){
    return (
        <div className="CraftbeerMe">
            <h1>CraftbeerMe</h1>
            <p>
                <Link to="/">Home</Link>
            </p>
        </div>
    )
}