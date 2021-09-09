import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Medal.css';


function Medal() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        axios.get(`/country/`)
            .then(res => {
                setCountries(res.data);
            });
    }, []);
    console.log(countries);
    return (
      <div className="Medal">
        <h1>Medal page</h1>
        <ul>
                {countries.map((country, id) => {
                    return (
                      <li key={id}>
                        <div className="event-item">
                            <div>{country.name}</div>
                            <div>{country.goldMedals}</div>
                            <div>{country.silverMedals}</div>
                            <div>{country.bronzeMedals}</div>
                            <div className="item-link"></div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
      </div>
    );
}

export default Medal;
