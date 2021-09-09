import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Schedule.css';


function Schedule() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get(`/event/`)
            .then(res => {
                setEvents(res.data);
            });
    }, []);
    console.log(events);
    return (
      <div className="schedule">
        <h1>Schedule page</h1>
        <ul>
                {events.map((event, id) => {
                    return (
                      <li key={id}>
                        <div className="event-item">
                        <div>{event.title}</div>
                            {(event.startDate <= Date.now()) && (event.endDate >= Date.now()) && (<span>Live</span>)}
                            <div className="item-link"></div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
      </div>
    );
}

export default Schedule;
