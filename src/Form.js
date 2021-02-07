import React from 'react';
import './Form.css';

export default function Form() {
    return (
        <form>
            <input type="Search" defaultValue="Enter a city..." className="search-box" />
            <input type="Submit" Value="Search" className="input-search" />
            <input type="Submit" Value="Current" className="input-current" />
        </form>
    );
}