import React, { useEffect, useState } from 'react';
import Country from './Country';


const Countrys = () => {
    const [countrys, setCountrys] = useState([])
    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then(res=>res.json())
        .then(data=>setCountrys(data))
    },[])
    return (
        <div >
            <h1>countrys: {countrys.length}</h1>
            {
                countrys.map(country=> <Country key={country.name.common} country={country}></Country>)
            }
        </div>
    );
};

export default Countrys;