import React from 'react';
import './Forecast.css';

export default function Forecast() {
    function getForecastDay(numDays) {
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var d = new Date();
        d.setDate(d.getDate() + numDays);

        return days[d.getDay()];
    }
    return (
        <div className="main">
            <p className="title">Forecast</p>
            <hr />
            <div className="boxes">
                <div className="sub-box">
                    <span>{getForecastDay(1)}</span>
                    <br/>
                    <span className="icon">🌧️</span>
                    <br/>
                    <span>14ºC</span>
                </div>
                <div className="sub-box">
                    <span>{getForecastDay(2)}</span>
                    <br/>
                    <span className="icon">☁️</span>
                    <br/>
                    <span>16ºC</span>
                </div>
                <div className="sub-box">
                    <span>{getForecastDay(3)}</span>
                    <br />
                    <span className="icon">⛈️</span>
                    <br/>
                    <span>15ºC</span>
                </div>
                <div className="sub-box">
                    <span>{getForecastDay(4)}</span>
                    <br/>
                    <span className="icon">🌥️</span>
                    <br />
                    <span>18ºC</span>
                </div>
            </div>
        </div>
    );
}