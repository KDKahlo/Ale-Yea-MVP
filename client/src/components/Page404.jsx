import React from "react";
import { Link} from "react-router-dom";

export default function Page404(){
    return (
        <div className="Page404">
            <h1>Page404</h1>
            <p>
                <Link to="/">Home</Link>
            </p>
        </div>
    )
}