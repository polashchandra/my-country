import React, { useEffect, useState } from 'react';
import Country from './Country';
import './Ciuntrys.css'

const Countrys = () => {
    const [countrys, setCountrys] = useState([])
    const [visitedCountry,setVisitedCountry] = useState([])
    const [visitedFlag,setvisitedFlag]=useState([])

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => setCountrys(data))
    }, [])

    const handleVisitedCountry= country =>{
        console.log('visited');
        const newvisitedCountry=[...visitedCountry, country]
        setVisitedCountry(newvisitedCountry)
    }
    const handleVisitedFlag=country=>{
        const newaddflag=[...visitedFlag,country]
        setvisitedFlag(newaddflag)
    }
    return (
        <div className='countris-contineer'>
            <h1>countrys: {countrys.length}</h1>
            <div>
                <h3>visited country</h3>
                {
                    visitedCountry.map(coutry=><li key={coutry.
                        cca2
                        }>{coutry.name.common}</li>)
                }
            </div>
            <div className='flag-img'>
                {
                    visitedFlag.map((flag,idx )=><img key={idx} src={flag}></img>)
                }
            </div>

            {
                countrys.map(country => <Country 
                    key={country.name.common} 
                    country={country}
                    handleVisitedCountry={handleVisitedCountry}
                    handleVisitedFlag={ handleVisitedFlag}
                    ></Country>)
            }
        </div>
    );
};

export default Countrys;