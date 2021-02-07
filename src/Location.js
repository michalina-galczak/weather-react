import React from 'react';
import './Location.css';

export default function Location(props) {
    function getDateAndTime() {
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var d = new Date();
        return `${days[d.getDay()]} ${d.getHours()}:${d.getMinutes()}`;
    }
    return (
        <div className="loc-div">
            <p className="loc-text"><h1>{props.city}</h1></p>
            <p className="loc-text">{getDateAndTime()}</p>
            <p className="loc-text">{props.weatherDesc}</p>
        </div>
    );
}