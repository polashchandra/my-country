import React, { useState } from 'react';
import "./Ciuntry.css"
const Country = ({ country, handleVisitedCountry }) => {
    const { name, flags } = country;

    const [visited, setvisited] = useState(false)

    const handleVisited = () => {
        setvisited(!visited)
    }
    
    return (
        <div className={`country ${visited && 'visi'}`}>
            <h1>{country.name?.common}</h1>
            <img src={country.flags?.png} alt="" />

            <button onClick={()=>handleVisitedCountry(country)}>visitedCountry</button>

            <button onClick={handleVisited}>{visited ? 'visited' : 'going on'}</button>
        </div>
    );
};

export default Country;