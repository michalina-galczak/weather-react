import React from 'react';
import './Weather.css';

export default function Weather(props) {
    return (
        <div className="weather">
            <div className="temperature">
                <span>{props.temp}ºC <span className="emoji">🌧️</span></span>
                <p className="high-low"><b>H:</b>{props.high}º <b>L:</b>{props.low}º</p>
            </div>
            <div className="other">
                <p className="text">Precipitation: {props.precipitation}%</p>
                <p className="text">Wind Speed: {props.windSpeed}m/s</p>
            </div>
        </div>
    );
}