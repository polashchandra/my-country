import React from 'react';
import "./Ciuntry.css"
const Country = ({country}) => {
    const {name, flags} = country;
    return (
        <div className='country'>
            <h1>{country.name?.common}</h1>
            <img src={country.flags?.png} alt="" />
        </div>
    );
};

export default Country;