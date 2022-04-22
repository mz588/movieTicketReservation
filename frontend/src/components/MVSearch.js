import styled from "styled-components";
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import "./styles.css";
import { useNavigate } from "react-router-dom";
import MvCard from './movieCard.js';

export default function MVSearch() {
    
    const [query, setQuery]=useState('');
    const [movies, setMovies]=useState([]);

    const searchMv=async(e)=>{
        e.preventDefault();
        setMovies([{title: "Iron Man", year: 2008},{title: "Thor", year: 2011}]);
    }

    return (
        <>
            <form className="form" onSubmit={searchMv}>
                <br></br>
                <input className="input" value={query} placeholder="eg. Iron Man" onChange={evt => setQuery(evt.target.value)}/>
                <button className="button" type="submit">Search</button>
            </form>
            <div className="card-list">
                {movies.map(movie=>(
                    <MvCard movie={movie} />
                ))}
            </div>
        </>
    );
};