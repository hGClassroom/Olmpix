import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Cheer.css';


function Cheer() {
    const [countries, setCountries] = useState([]);
    const [cheer, setCheer] = useState(0);

    useEffect(() => {
        axios.get(`/country/`)
            .then(res => {
                setCountries(res.data);
            });
        const interval = setInterval(async () => {
            axios.get(`/country/`)
            .then(res => {
                setCountries(res.data);
            });
        }, 10000);
    }, []);

    const handleOnClick = (e) => {
        setCheer(cheer + 1);
        axios.put(`/country/`)
            .then(res => {
                setCountries(res.data);
            });
    }
    return (
      <div className="Cheer">
        <h1>Cheer page</h1>
        <ul>
                {countries.map((country, id) => {
                    return (
                      <li key={id}>
                        <div className="event-item">
                            <div>{country.name}</div>
                            <div>{country.cheers}</div>
                            <div className="item-link"></div>
                            </div>
                            <button id={id} onClick={handleOnClick}>Cheer</button>
                      </li>
                    );
                })}
            
        </ul>
        
      </div>
    );
}

export default Cheer;
