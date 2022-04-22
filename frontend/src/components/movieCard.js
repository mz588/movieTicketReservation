import React from "react";
import "./styles.css";

export default function MvCard({movie}) {
    return(
        <div className="mvcard">
            <img className="card--image" src="/images/iron man.jpg"
                alt={movie.title+' poster'}
                width="360" height="480"/>
            <br/>
            <div className="card--content">
            <h3 className="card--title">{movie.title}</h3>
            <p><small>Year: {movie.year}</small></p>
            </div>
        </div>
    )
}