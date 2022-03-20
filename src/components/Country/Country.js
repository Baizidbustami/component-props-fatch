import React from 'react';
import './Country.css'

const Country = (props) => {
    const {area, name, flags} = props.count;
    return (
        <div className='country'>
            <h1>Name:{name.common}</h1>
            <h3>{area}</h3>
            <img src={flags.png} alt="" srcset="" />
            </div>
    );
};

export default Country;