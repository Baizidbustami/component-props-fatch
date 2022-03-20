import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [country, setCountry] =useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountry(data))
    },[])
    return (
        <div>
            <h2>Commponent other File</h2>
           <div className='countrys'>
           {
           country.map(count=><Country count={count}></Country>)
            }
           </div>
        </div>
    );
};

export default Countries;